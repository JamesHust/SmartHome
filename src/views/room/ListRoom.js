import React, { useState } from 'react'
import {
    CButton,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
    CFormGroup,
    CInput,
    CLabel,
    CTextarea
} from '@coreui/react'
import './room.css'
import Room from './Room'
const ListRoom = () => {
    const [large, setAddRoom] = useState(false)
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Danh sách các phòng
                </div>
                <div className="card-body">
                    <CRow className="justify-content-center">
                        {/* Mỗi phòng */}
                        <Room />
                        {/* Mỗi phòng */}
                        <Room />
                        {/* Mỗi phòng */}
                        <Room />
                        {/* Thêm phòng mới */}
                        <CCol xs="12" md="3" className="mb-4">
                            <div className="wrapper h-100 d-flex align-items-center justify-content-center" onClick={() => setAddRoom(!large)}>
                                <img src={require('./img/plus.svg')} className="button-add" alt="" style={{ height: '120px' }} />
                            </div>
                        </CCol>
                    </CRow>
                </div>
                {/* Modal thêm phòng mới */}
                <CModal
                    show={large}
                    onClose={() => setAddRoom(!large)}
                    size="lg"
                    color="success"
                >
                    <CModalHeader closeButton>
                        <CModalTitle>Thêm phòng mới</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
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
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="success" onClick={() => setAddRoom(!large)}>Thêm mới</CButton>{' '}
                        <CButton color="secondary" onClick={() => setAddRoom(!large)}>Hủy</CButton>
                    </CModalFooter>
                </CModal>
            </div>
        </>
    )
}

export default ListRoom
