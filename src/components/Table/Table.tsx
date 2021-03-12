import React from 'react'
import "./Table.scss";
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


interface PROPS {
    edit: (user: USER) => void,
    deleted: (id: number | null) => void
    users: Array<USER>
}
type USER = {
    id: number | null;
    no: number | null;
    image?: string;
    code: string;
    name?: string;
    list?: string;
    group?: string;
    category?: string;
    supplier?: string;
    status?: string;
    version?: string;
};

const Table = (props: PROPS) => {
    const {
        edit,
        deleted,
        users
    } = props
    return (
        <table id="table-user">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ảnh sản phẩm</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Danh mục sản phẩm</th>
                    <th>Nhóm sản phẩm</th>
                    <th>Loại sản phẩm</th>
                    <th>Nhà cung cấp</th>
                    <th>Trạng thái</th>
                    <th>Sử dụng phiên bản</th>
                    <th>Tác vụ</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.image}</td>
                            <td>{user.code}</td>
                            <td>{user.name}</td>
                            <td>{user.list}</td>
                            <td>{user.group}</td>
                            <td>{user.category}</td>
                            <td>{user.supplier}</td>
                            <td>{user.status}</td>
                            <td>{user.version}</td>
                            <td>
                                <Button shape="circle" icon={<EditOutlined />}
                                    onClick={() => {
                                        edit(user)
                                    }}
                                />
                                <Button shape="circle" icon={<DeleteOutlined />}
                                    onClick={() => {
                                        deleted(user.id)
                                    }}
                                />
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={11}>Không có sản phẩm nào</td>
                    </tr>
                )}
            </tbody>
        </table>
    );

}

export default Table

