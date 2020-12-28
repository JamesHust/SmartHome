import React from 'react'
import {
    CWidgetDropdown,
    CRow,
    CCol,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from './ChartLineSimple'
import ChartBarSimple from './ChartBarSimple'

// Biểu đồ thống kê chung
const Widgets = () => {
    return (
        <CRow>
            {/* Nhiệt độ chung ngôi nhà */}
            <CCol sm="6" lg="3">
                <CWidgetDropdown
                    header="45°C"
                    text="Nhiệt độ ngôi nhà"
                    className="gd-pink"
                >
                    <img src={require('./img/temperature.svg')} className="img-fix-widgets-sm pb-2" alt="" />
                </CWidgetDropdown>
            </CCol>
            {/* Thống kê số phòng quản lý */}
            <CCol sm="6" lg="3">
                <CWidgetDropdown
                    header="12"
                    text="Phòng"
                    className="gd-blue"
                >
                    <img src={require('./img/sofa.svg')} className="img-fix-widgets pb-2" alt="" />
                </CWidgetDropdown>
            </CCol>
            {/* Thống kê số thiết bị hoạt động */}
            <CCol sm="6" lg="3">
                <CWidgetDropdown
                    className="gd-green"
                    header="45"
                    text="Thiết bị hoạt động"
                >
                    <img src={require('./img/profile.svg')} className="img-fix-widgets pb-2" alt="" />
                </CWidgetDropdown>
            </CCol>
            {/* Thống kê số sensor hoạt động */}
            <CCol sm="6" lg="3">
                <CWidgetDropdown
                    className="gd-black"
                    header="45"
                    text="Sensor hoạt động"
                >
                    <img src={require('./img/kinect.svg')} className="img-fix-widgets-sm pb-2" alt="" />
                </CWidgetDropdown>
            </CCol>
        </CRow>
    )
}

export default Widgets
