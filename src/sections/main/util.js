import api from '/api.js'


function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

export async function razorPay(newStore) {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const result = await api.post('/lob', newStore);

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }
/*

    {
        "lob": {
            "bid": 6,
            "bname": "Sri Venkateshwara Bars",
            "btype": "BAR",
            "address": "123 Testing Bangalore ",
            "postal_code": 5600101,
            "gst_number": "1Q122a-ea7sr127a3",
            "owner_uid": 1,
            "subscription_plan_id": null,
            "subscribed_date": null,
            "subscription_token": null,
            "subscription_status": "p",
            "created_at": "2021-12-12T03:45:40.006Z",
            "updated_at": "2021-12-12T03:45:40.007Z"
        },
        "lob_user_map": {
            "id": 5,
            "bid": 6,
            "uid": 1,
            "role": "owner"
        },
        "order_obj": {
            "id": "order_IWQ5wiawz2lH0M",
            "entity": "order",
            "amount": 720000,
            "amount_paid": 0,
            "amount_due": 720000,
            "currency": "INR",
            "receipt": "f97df510-5afd-11ec-a12d-21271ec77f90",
            "offer_id": null,
            "status": "created",
            "attempts": 0,
            "notes": [],
            "created_at": 1639280740
        }
    }
    */
    const { amount, id: order_id, receipt } = result.data.order_obj;
    const { bid, } = result.data.lob;

    const options = {
        key: "rzp_test_aG3k5EAT4Hk77o", // Enter the Key ID generated from the Dashboard
        amount: (amount*100).toString(),
        currency: "INR",
        name: "test Corp.",
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
            const data = {
                receiptId: receipt,
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await api.post(`/lob/${bid}/payment-verify`, data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Test Dey",
            email: "Test@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}