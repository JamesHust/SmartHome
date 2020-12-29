import React, { useState } from 'react';
import {
    CButton,
    CTabs,
    CNav,
    CNavLink,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CNavItem,
    CTabPane,
    CTabContent,
    CDataTable,
    CFormGroup,
    CInput,
    CSelect,
    CLabel,
    CTextarea
} from '@coreui/react'
const usersData = [
    { id: 0, "Tên thiết bị": 'Đèn cổng trước', 'Mô tả': '2018/01/01', 'Loại thiết bị': 'Đèn' },
    { id: 1, "Tên thiết bị": 'Đèn cổng sau', 'Mô tả': '2018/01/01', 'Loại thiết bị': 'Đèn' },
    { id: 2, "Tên thiết bị": 'Đèn chùm', 'Mô tả': '2018/02/01', 'Loại thiết bị': 'Đèn' },
    { id: 3, "Tên thiết bị": 'Đèn bếp', 'Mô tả': '2018/02/01', 'Loại thiết bị': 'Đèn' },
    { id: 4, "Tên thiết bị": 'Tivi', 'Mô tả': '2018/03/01', 'Loại thiết bị': 'Điện tử' },
    { id: 5, "Tên thiết bị": 'Điều hòa', 'Mô tả': '2018/01/21', 'Loại thiết bị': 'Điện tử' },
    { id: 6, "Tên thiết bị": 'Tủ lạnh', 'Mô tả': '2018/01/01', 'Loại thiết bị': 'Điện tử' },
]
const fields = ['Tên thiết bị', 'Loại thiết bị', 'Mô tả',
    {
        key: 'delete',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false
    }
]

// Từng phòng
const Room = () => {
    const [large, setConfig] = useState(false)
    const [danger, setConfirm] = useState(false)
    return (
        <div>
            <CCol xs="12" md="3" className="mb-4">
                <div className="wrapper">
                    <div className="clash-card barbarian">
                        <div className="clash-card__image clash-card__image--barbarian">
                            <img src="https://cdn.dribbble.com/users/4702597/screenshots/11439362/media/e6fe5287a8263659a89222fbb16e64b4.jpg?compress=1&resize=800x600" alt="barbarian" />
                        </div>
                        {/* Tên phòng */}
                        <div className="clash-card__unit-name">Phòng khách</div>
                        {/* Mô tả */}
                        <div className="clash-card__unit-description">
                            The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
                                    </div>
                        <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix d-flex"  >
                            <div className="one-third color-info border-bl">
                                <div className="stat-value" onClick={() => setConfig(!large)}>Quản lý</div>
                            </div>
                            <div className="one-third no-border color-danger border-br">
                                <div className="stat-value" onClick={() => setConfirm(!danger)} >Xóa phòng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CCol>
            {/* Modal quản lý phòng */}
            <CModal
                show={large}
                onClose={() => setConfig(!large)}
                size="lg"
                color="info"
            >
                <CModalHeader closeButton>
                    <CModalTitle>Quản lý chi tiết phòng</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CTabs activeTab="info-room">
                        <CNav variant="tabs">
                        <CNavItem>
                                <CNavLink data-tab="info-room">
                                    Thông tin phòng
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink data-tab="device">
                                    Danh sách thiết bị phòng
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink data-tab="add-device">
                                    Thêm thiết bị mới
                            </CNavLink>
                            </CNavItem>
                        </CNav>
                        <CTabContent>
                            {/* Tab thông tin phòng */}
                            <CTabPane data-tab="info-room">
                                <CFormGroup row className="mt-3">
                                    <CCol md="2">
                                        <CLabel htmlFor="name-room">Tên phòng</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="10">
                                        <CInput id="disabled-input" name="name-room" placeholder="Tên phòng" />
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
                                            placeholder="Mô tả phòng..."
                                        />
                                    </CCol>
                                </CFormGroup>
                                {/* Cập nhật */}
                                <div className="d-flex justify-content-end w-100"><CButton color="info">Cập nhật</CButton></div>
                            </CTabPane>
                            {/* Tab quản lý thiết bị phòng */}
                            <CTabPane data-tab="device">
                                <CDataTable
                                    items={usersData}
                                    fields={fields}
                                    itemsPerPage={5}
                                    pagination
                                    scopedSlots={{
                                        'delete':
                                            (item, index) => {
                                                return (
                                                    <td className="py-2">
                                                        <CButton
                                                            color="danger"
                                                        >
                                                            Xóa
                                                        </CButton>
                                                    </td>
                                                )
                                            },
                                    }}
                                />
                            </CTabPane>
                            {/* Tab thêm mới thiết bị */}
                            <CTabPane data-tab="add-device">
                                <CFormGroup row className="mt-4">
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Chọn tên thiết bị thêm mới</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Chọn tên thiết bị</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                {/* Cập nhật */}
                                <div className="d-flex justify-content-end"><CButton color="success" style={{ float: 'left' }}>Thêm mới</CButton></div>
                            </CTabPane>
                        </CTabContent>
                    </CTabs>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setConfig(!large)}>Hủy</CButton>
                </CModalFooter>
            </CModal>
            {/* Modal xác thực xóa phòng */}
            <CModal
                show={danger}
                onClose={() => setConfirm(!danger)}
                color="danger"
            >
                <CModalHeader closeButton>
                    <CModalTitle>Xác nhận</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Bạn có chắc chắn muốn xóa phòng này?
              </CModalBody>
                <CModalFooter>
                    <CButton color="danger" onClick={() => setConfirm(!danger)}>Xóa</CButton>{' '}
                    <CButton color="secondary" onClick={() => setConfirm(!danger)}>Hủy</CButton>
                </CModalFooter>
            </CModal>
        </div>
    );
}

export default Room;