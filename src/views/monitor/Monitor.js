import React, { lazy } from 'react'
import {
  CEmbedItem,
  CCard,
  CCardBody,
  CEmbed,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CTabs,
  CNavItem,
  CNavLink,
  CTabPane,
  CNav,
  CTabContent
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
} from '@coreui/react-chartjs'
const Widgets = lazy(() => import('./Widgets.js'))

const Monitor = () => {
  return (
    <>
      {/* Biểu đồ thống kê chung */}
      <Widgets />
      <CRow>
        {/* Biểu đồ nhiệt độ */}
        <CCol xs="12" md="6" className="mb-4">
          <CCard>
            <CCardHeader>
              Biểu đồ nhiệt độ
          </CCardHeader>
            <CCardBody>
              <CTabs activeTab="hour">
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink data-tab="hour">
                      Theo giờ
                  </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="day">
                      Theo ngày
                  </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane data-tab="hour">
                    <CChartLine
                      type="line"
                      datasets={[
                        {
                          label: '°C',
                          // backgroundColor: '#ff7675',
                          borderColor: "#ff7675",
                          fill: false,
                          data: [30, 39, 10, 50, 30, 70, 35]
                        },
                        {
                          label: '°F',
                          // backgroundColor: '#74b9ff',
                          borderColor: "#74b9ff",
                          fill: false,
                          data: [39, 80, 40, 35, 40, 20, 45]
                        }
                      ]}
                      labels={['6 giờ trước', '5 giờ trước', '4 giờ trước', '3 giờ trước', '2 giờ trước', '1 giờ trước', 'Hiện tại']}
                      options={{
                        tooltips: {
                          enabled: true
                        }
                      }}
                    />
                  </CTabPane>
                  <CTabPane data-tab="day">
                    <CChartLine
                      type="line"
                      datasets={[
                        {
                          label: '°C',
                          backgroundColor: '#ff7675',
                          data: [30, 39, 10]
                        },
                        {
                          label: '°F',
                          backgroundColor: '#74b9ff',
                          data: [39, 80, 40]
                        }
                      ]}
                      labels={['Hôm kia', 'Hôm qua', 'Hôm nay']}
                      options={{
                        tooltips: {
                          enabled: true
                        }
                      }}
                    />
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
        {/* Biểu đồ nhiệt độ */}
        <CCol xs="12" md="6" className="mb-4">
          <CCard>
            <CCardHeader>
              Biểu đồ độ ẩm
          </CCardHeader>
            <CCardBody>
              <CTabs activeTab="hour">
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink data-tab="hour">
                      Theo giờ
                  </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="day">
                      Theo ngày
                  </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane data-tab="hour">
                    <CChartBar
                      type="bar"
                      datasets={[
                        {
                          label: 'Độ ẩm',
                          backgroundColor: [
                            "#2bcbba",
                            "#0fb9b1",
                            "#45aaf2",
                            "#2d98da",
                            "#4b7bec",
                            "#3867d6",
                            "#a55eea"
                          ],
                          data: [80, 75, 79, 85, 65, 60, 90, 50] //50 để fix cho giá trị bé nhất
                        }
                      ]}
                      labels={['6 giờ trước', '5 giờ trước', '4 giờ trước', '3 giờ trước', '2 giờ trước', '1 giờ trước', 'Hiện tại']}
                      options={{
                        tooltips: {
                          enabled: true
                        }
                      }}
                    />
                  </CTabPane>
                  <CTabPane data-tab="day">
                  <CChartBar
                      type="bar"
                      datasets={[
                        {
                          label: 'Độ ẩm',
                          backgroundColor: [
                            "#45aaf2",
                            "#2d98da",
                            "#3867d6",
                          ],
                          data: [95, 65, 79, 50, 100] //50 để fix cho giá trị bé nhất
                        }
                      ]}
                      labels={['Hôm kia', 'Hôm qua', 'Hôm nay']}
                      options={{
                        tooltips: {
                          enabled: true
                        }
                      }}
                    />
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* Phần video demo */}
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Video demo
            </CCardHeader>
            <CCardBody>
              <CEmbed>
                <CEmbedItem src="https://www.youtube.com/embed/psZ1g9fMfeo"/>
              </CEmbed>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Monitor
