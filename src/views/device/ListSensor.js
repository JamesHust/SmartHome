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
const ListSensor = () => {
    // Dữ liệu fake cho danh sách sensor
    const dataSensor = [
        { 'Mã sensor': '123', 'Tên sensor': 'Đèn', 'Mô tả': 'Đèn bàn', 'Loại': 'Light', 'status': 'true' },
        { 'Mã sensor': '123', 'Tên sensor': 'Đèn', 'Mô tả': 'Đèn bàn', 'Loại': 'Light', 'status': 'true' },
        { 'Mã sensor': '123', 'Tên sensor': 'Đèn', 'Mô tả': 'Đèn bàn', 'Loại': 'Light', 'status': 'true' },
        { 'Mã sensor': '123', 'Tên sensor': 'Đèn', 'Mô tả': 'Đèn bàn', 'Loại': 'Light', 'status': 'false' },
        { 'Mã sensor': '123', 'Tên sensor': 'Đèn', 'Mô tả': 'Đèn bàn', 'Loại': 'Light', 'status': 'true' },
        { 'Mã sensor': '123', 'Tên sensor': 'Đèn', 'Mô tả': 'Đèn bàn', 'Loại': 'Light', 'status': 'true' },
        { 'Mã sensor': '123', 'Tên sensor': 'Đèn', 'Mô tả': 'Đèn bàn', 'Loại': 'Light', 'status': 'true' },
    ]
    // Set checked cho bảng thiết bị, sensor
    const getBadge = status => {
        switch (status) {
            case 'true': return true
            case 'false': return false
            default: return false
        }
    }
    // Mô tả các trường cho bảng sensor
    const fieldSensor = [
        { key: 'Mã sensor', label: 'Mã test', _style: { width: '10%' } }, //label là để hiển thị tên, key là để map dữ liệu, tạm thời đang để key TV, sau chuyển lại TA
        'Tên sensor',
        { key: 'Mô tả', _style: { width: '40%' } },
        'Loại',
        { key: 'status', _style: { width: '10%' } },
        {
            key: 'actionSensor',
            label: '',
            _style: { width: '12%' },
            sorter: false,
            filter: false
        },
    ]

    const [deleteS, setDltS] = useState(false)
    const [updateS, setUpdateS] = useState(false)
    return (
        <div>
            <h5>
                Danh sách sensor trong thiết bị
            </h5>
            <CDataTable
                items={dataSensor}
                fields={fieldSensor}
                columnFilter
                tableFilter
                footer
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                    'status':
                        (item) => (
                            <td>
                                <CSwitch className={'mx-1'} variant={'3d'} color={'success'} defaultChecked={getBadge(item.status)} size="sm"/>
                            </td>
                        ),
                    'actionSensor':
                        (item, index) => {
                            return (
                                <td className="d-flex align-items-center">
                                    <CButton
                                        color="info"
                                        onClick={() => setUpdateS(!updateS)}
                                        className="mr-2"
                                        size="sm"
                                    >
                                        Cập nhật
                                    </CButton>
                                    <CButton
                                        color="danger"
                                        onClick={() => setDltS(!deleteS)}
                                        size="sm"
                                    >
                                        Xóa
                                </CButton>
                                </td>
                            )
                        },
                }}
            />
            {/* Modal cập nhật sensor */}
            <CModal
                show={updateS}
                onClose={() => setUpdateS(!updateS)}
                color="info"
                size="lg"
            >
                <CModalHeader closeButton>
                    <CModalTitle>Cập nhật sensor</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CFormGroup row className="mt-3">
                        <CCol md="3">
                            <CLabel htmlFor="sensor-code">Mã sensor</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="disabled-input" name="sensor-code" placeholder="Mã sensor" />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row className="mt-3">
                        <CCol md="3">
                            <CLabel htmlFor="name-sensor">Tên sensor</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="disabled-input" name="name-sensor" placeholder="Tên sensor" />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row className="mt-3">
                        <CCol md="3">
                            <CLabel htmlFor="select">Chọn loại sensor</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CSelect custom name="select" id="select">
                                <option value="0">Chọn loại</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                            </CSelect>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row className="mt-3">
                        <CCol md="3">
                            <CLabel htmlFor="comman-on">Lệnh bật</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="disabled-input" name="comman-on" placeholder="Lệnh bật sensor" />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row className="mt-3">
                        <CCol md="3">
                            <CLabel htmlFor="comman-off">Lệnh tắt</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="disabled-input" name="comman-off" placeholder="Lệnh tắt sensor" />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="textarea-input">Mô tả</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CTextarea
                                name="textarea-input"
                                id="textarea-input"
                                rows="4"
                                placeholder="Mô tả sensor..."
                            />
                        </CCol>
                    </CFormGroup>
                </CModalBody>
                <CModalFooter>
                    <CButton color="info" onClick={() => setUpdateS(!updateS)}>Cập nhật</CButton>{' '}
                    <CButton color="secondary" onClick={() => setUpdateS(!updateS)}>Hủy</CButton>
                </CModalFooter>
            </CModal>
            {/* Modal xóa sensor */}
            <CModal
                show={deleteS}
                onClose={() => setDltS(!deleteS)}
                color="danger"
            >
                <CModalHeader closeButton>
                    <CModalTitle>Xác nhận</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Bạn có chắc chắn muốn xóa sensor này?
                </CModalBody>
                <CModalFooter>
                    <CButton color="danger" onClick={() => setDltS(!deleteS)}>Xóa</CButton>{' '}
                    <CButton color="secondary" onClick={() => setDltS(!deleteS)}>Hủy</CButton>
                </CModalFooter>
            </CModal>
        </div>
    );
}

export default ListSensor;