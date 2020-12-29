import React, { useState } from 'react';
import {
    CSwitch,
    CButton,
    CCardBody,
    CCollapse,
    CModal,
    CDataTable,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CModalTitle,
    CFormGroup,
    CCol,
    CSelect,
    CLabel,
    CInput,
    CTextarea
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ListSensor from './ListSensor';
const DeviceReady = () => {
    // Dữ liệu fake cho danh sách thiết bị
    const usersData = [
        { 'Mã thiết bị': '001', 'Tên thiết bị': 'ESP', 'Mô tả': 'Guest', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '002', 'Tên thiết bị': 'Pi', 'Mô tả': 'Member', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '133', 'Tên thiết bị': 'Đèn phòng', 'Mô tả': 'Staff', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '015', 'Tên thiết bị': 'Tivi', 'Mô tả': 'Admin', 'status': 'true', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '110', 'Tên thiết bị': 'Tủ lạnh', 'Mô tả': 'Member', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '005', 'Tên thiết bị': 'Điều hòa', 'Mô tả': 'Staff', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '007', 'Tên thiết bị': 'Máy sưởi', 'Mô tả': 'Member', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '014', 'Tên thiết bị': 'Đèn ngủ', 'Mô tả': 'Staff', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '003', 'Tên thiết bị': 'Đèn bếp', 'Mô tả': 'Admin', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '112', 'Tên thiết bị': 'Lò vi sóng', 'Mô tả': 'Member', 'deviceCode': 'Pi' },
        { 'Mã thiết bị': '123', 'Tên thiết bị': 'Bình nóng lạnh', 'Mô tả': 'Staff', 'deviceCode': 'Pi' },
    ]


    const [details, setDetails] = useState([])

    const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
            newDetails.splice(position, 1)
        } else {
            newDetails = [...details, index]
        }
        setDetails(newDetails)
    }

    // Mô tả trường cho bảng thiết bị
    const fields = [
        { key: 'Mã thiết bị', _style: { width: '12%' } },
        'Tên thiết bị',
        { key: 'deviceCode', label:'Loại', _style: { width: '10%' } },
        { key: 'Mô tả', _style: { width: '30%' } },
        {
            key: 'actionDevice',
            label: '',
            _style: { width: '12%' },
            sorter: false,
            filter: false
        },
        {
            key: 'show_details',
            label: '',
            _style: { width: '8%' },
            sorter: false,
            filter: false
        }
    ]

    // Mô tả các trường cho bảng sensor
    const fieldSensor = [
        { key: 'Mã sensor', _style: { width: '10%' } },
        'Tên sensor',
        { key: 'Mô tả', _style: { width: '50%' } },
        'Loại',
        { key: 'status', _style: { width: '10%' } },
    ]

    const [danger, setConfirm] = useState(false)
    const [update, setUpdate] = useState(false)
    const [deviceAdd, setAddDevice] = useState(false)
    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>Danh sách các thiết bị sẵn sàng</div>
                <CButton color="success" className="d-flex align-items-center" onClick={() => setAddDevice(!deviceAdd)}><CIcon name={'cilPlaylistAdd'} className="mr-1" /><div>Thêm thiết bị</div></CButton>
            </div>
            <div className="card-body">
                <CDataTable
                    items={usersData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    footer
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                        'actionDevice':
                            (item, index) => {
                                return (
                                    <td className="d-flex align-items-center">
                                        <CButton color="info" className="ml-1" onClick={() => setUpdate(!update)}>
                                            Cập nhật
                                            </CButton>
                                        <CButton color="danger" className="ml-1" onClick={() => setConfirm(!danger)}>
                                            Xóa
                                        </CButton>
                                    </td>
                                )
                            },
                        'show_details':
                            (item, index) => {
                                return (
                                    <td className="py-2">
                                        <CButton
                                            color="info"
                                            variant="outline"
                                            shape="square"
                                            onClick={() => { toggleDetails(index) }}
                                        >
                                            {details.includes(index) ? 'Ẩn chi tiết' : 'Chi tiết'}
                                        </CButton>
                                    </td>
                                )
                            },
                        'details':
                            (item, index) => {
                                return (
                                    <CCollapse show={details.includes(index)}>
                                        <CCardBody>
                                            <ListSensor />
                                        </CCardBody>
                                    </CCollapse>
                                )
                            }
                    }}
                />
                
                {/* Modal cập nhật thiết bị */}
                <CModal
                    show={update}
                    onClose={() => setUpdate(!update)}
                    color="info"
                    size="lg"
                >
                    <CModalHeader closeButton>
                        <CModalTitle>Cập nhật thiết bị</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CFormGroup row className="mt-3">
                            <CCol md="2">
                                <CLabel htmlFor="name-dv">Tên thiết bị</CLabel>
                            </CCol>
                            <CCol xs="12" md="10">
                                <CInput id="disabled-input" name="name-dv" placeholder="Tên thiết bị" />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="2">
                                <CLabel htmlFor="textarea-input">Mô tả</CLabel>
                            </CCol>
                            <CCol xs="12" md="10">
                                <CTextarea
                                    name="textarea-input"
                                    id="textarea-input"
                                    rows="9"
                                    placeholder="Mô tả thiết bị..."
                                />
                            </CCol>
                        </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="info" onClick={() => setUpdate(!update)}>Cập nhật</CButton>{' '}
                        <CButton color="secondary" onClick={() => setUpdate(!update)}>Hủy</CButton>
                    </CModalFooter>
                </CModal>
                {/* Modal xóa thiết bị */}
                <CModal
                    show={danger}
                    onClose={() => setConfirm(!danger)}
                    color="danger"
                >
                    <CModalHeader closeButton>
                        <CModalTitle>Xác nhận</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        Bạn có chắc chắn muốn xóa thiết bị này?
                </CModalBody>
                    <CModalFooter>
                        <CButton color="danger" onClick={() => setConfirm(!danger)}>Xóa</CButton>{' '}
                        <CButton color="secondary" onClick={() => setConfirm(!danger)}>Hủy</CButton>
                    </CModalFooter>
                </CModal>
            </div>
            {/* Modal thêm mới thiết bị */}
            <CModal
                show={deviceAdd}
                onClose={() => setAddDevice(!deviceAdd)}
                color="success"
                size="lg"
            >
                <CModalHeader closeButton>
                    <CModalTitle>Thêm mới thiết bị</CModalTitle>
                </CModalHeader>
                <CModalBody>
                <CFormGroup row className="mt-3">
                        <CCol md="2">
                            <CLabel htmlFor="device-code">Mã thiết bị</CLabel>
                        </CCol>
                        <CCol xs="12" md="10">
                            <CInput id="disabled-input" name="device-code" placeholder="Mã thiết bị" />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row className="mt-3">
                        <CCol md="2">
                            <CLabel htmlFor="name-device">Tên thiết bị</CLabel>
                        </CCol>
                        <CCol xs="12" md="10">
                            <CInput id="disabled-input" name="name-device" placeholder="Tên thiết bị" />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row className="mt-3">
                        <CCol md="2">
                            <CLabel htmlFor="select">Loại thiết bị</CLabel>
                        </CCol>
                        <CCol xs="12" md="10">
                            <CSelect custom name="select" id="select">
                                <option value="0">Chọn loại</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                            </CSelect>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="2">
                            <CLabel htmlFor="textarea-input-1">Mô tả</CLabel>
                        </CCol>
                        <CCol xs="12" md="10">
                            <CTextarea
                                name="textarea-input-1"
                                id="textarea-input"
                                rows="9"
                                placeholder="Mô tả thiết bị..."
                            />
                        </CCol>
                    </CFormGroup>
                </CModalBody>
                <CModalFooter>
                    <CButton color="success" onClick={() => setAddDevice(!deviceAdd)}>Thêm mới</CButton>{' '}
                    <CButton color="secondary" onClick={() => setAddDevice(!deviceAdd)}>Hủy</CButton>
                </CModalFooter>
            </CModal>
        </div>

    );
}

export default DeviceReady;