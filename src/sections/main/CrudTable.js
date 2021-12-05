import React, { useState, useEffect } from 'react'
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
    Button,
    Card,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {storeList} from './store.data';


const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& thead': {
            '& th:first-child': {
                paddingLeft: 16,
            },
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const CrudTable = () => {
    const [uid, setUid] = useState(null)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)
    const [user, setUser] = useState(null)
    const [userList, setUserList] = useState([])
    const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false)
    const [
        shouldOpenConfirmationDialog,
        setShouldOpenConfirmationDialog,
    ] = useState(false)

    const classes = useStyles()

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleDialogClose = () => {
        setShouldOpenEditorDialog(false)
        setShouldOpenConfirmationDialog(false)
        updatePageData()
    }

    const handleDeleteUser = (user) => {
        setUser(user)
        setShouldOpenConfirmationDialog(true)
    }

    const handleConfirmationResponse = () => {
       // deleteUser(user).then(() => {
      //      handleDialogClose()
      //  })
    }

    const updatePageData = () => {
       // getAllUser().then(({ data }) => {
       //     
       // })
       setUserList(storeList)
    }

    useEffect(() => {
        updatePageData()
    }, [])

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
            'CRUD Table'
            </div>

            <Button
                className="mb-4"
                variant="contained"
                color="primary"
                onClick={() => setShouldOpenEditorDialog(true)}
            >
                Add New Member
            </Button>
            <Card className="w-full overflow-auto" elevation={6}>
                <Table
                    className={clsx(
                        'whitespace-pre min-w-750',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Link</TableCell>
                            <TableCell>Store Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>owner</TableCell>
                            <TableCell>gst_number</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList
                            ?.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                        
                            .map((user, index) => (
                                <TableRow hover key={user.id}>
                                    <TableCell className="px-0" align="left">
                                        {user.bname}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {user.address}
                                    </TableCell>
                                    <TableCell className="px-0">
                                        ${user.owner}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {user.gst_number}
                                    </TableCell>
                                    <TableCell className="px-0">
                                        {user.isActive ? (
                                            <small className="rounded bg-primary elevation-z3 text-white px-2 py-2px">
                                                active
                                            </small>
                                        ) : (
                                            <small className="rounded bg-light-gray elevation-z3 px-2 py-2px">
                                                inactive
                                            </small>
                                        )}
                                    </TableCell>
                                    <TableCell className="px-0 border-none">
                                        <IconButton
                                            onClick={() => {
                                                setUid(user.id)
                                                setShouldOpenEditorDialog(true)
                                            }}
                                        >
                                            <Icon color="primary">edit</Icon>
                                        </IconButton>
                                        <IconButton
                                            onClick={() =>
                                                handleDeleteUser(user)
                                            }
                                        >
                                            <Icon color="error">delete</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>

                <TablePagination
                    className="px-4"
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={userList?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={({ target: { value } }) =>
                        setRowsPerPage(value)
                    }
                />

    
            </Card>
        </div>
    )
}

export default CrudTable
