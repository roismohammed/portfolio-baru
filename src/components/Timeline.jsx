import React from 'react'
import { RiBriefcaseFill } from 'react-icons/ri';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'

export default function Timeline() {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work card-timeline"
                    contentStyle={{ background: '#464346', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #464346' }}
                    date="2022 - Pelajar"
                    iconStyle={{ background: '#464346', color: '#fff' }}
                    icon={<RiBriefcaseFill />}
                >
                    <h3 className="vertical-timeline-element-title">SMK NURUL AMANAH </h3>
                    <p>  Bersekolah di SMK NURA dengan jurusan TKJ (Teknik Komputer Jaringan) </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-dark"
                    contentStyle={{ background: '#464346', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #464346' }}
                    date="2019 - 2022"
                    iconStyle={{ background: '#464346', color: '#fff' }}
                    icon={<RiBriefcaseFill />}
                >
                    <h3 className="vertical-timeline-element-title">SMP NEGERI 4 TANAH MERAH SATU ATAP</h3>
                    <p>  Lulus pada tahun 2022</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-dark"
                    contentStyle={{ background: '#464346', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #464346' }}
                    date="2013 - 2019"
                    iconStyle={{ background: '#464346', color: '#fff' }}
                    icon={<RiBriefcaseFill />}
                >
                    <h3 className="vertical-timeline-element-title">SD NEGERI RONGDURIN TANAH MERAH</h3>
                    <p>Lulus pada tahun 2019</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}
