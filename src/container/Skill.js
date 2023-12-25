import React from "react"
import '../App.css'

export default function Skill() {
    return (
        <div>
            <div className="half-page">
                {/* Skills 영역 start */}
                <h1>Skills</h1>
                {/* FrontEnd */}
                <div className="skills-font">
                    FrontEnd
                    <div className="center-logo">
                        <div className="css3-icon"></div>
                        <div className="html5-icon"></div>
                        <div className="js-icon"></div>
                        <div className="jquery-icon"></div>
                        <div className="react-icon"></div>
                        <div className="redux-icon"></div>
                        <div className="next-icon"></div>
                    </div>
                </div>

                {/* BackEnd */}
                <div className="skills-font">
                    BackEnd
                    <div className="center-logo">
                        <div className="java-icon"></div>
                        <div className="springboot-icon"></div>
                        <div className="node-icon"></div>
                        <div className="express-icon"></div>
                    </div>
                </div>

                {/* DevOps/Version Control */}
                <div className="skills-font">
                    DevOps/Version Control
                    <div className="center-logo">
                        <div className="github-icon"></div>
                        <div className="linux-icon"></div>
                    </div>
                </div>

                 {/* Database */}
                <div className="skills-font">
                    Database
                    <div className="center-logo">
                        <div className="mongodb-icon"></div>
                        <div className="mysql-icon"></div>
                        <div className="mariadb-icon"></div>
                        <div className="mybatis-icon"></div>
                    </div>
                </div>

                {/* ETC */}
                <div className="skills-font">
                    ETC
                    <div className="center-logo">
                        <div className="slack-icon"></div>
                        <div className="flutter-icon"></div>
                    </div>
                </div>
                {/* Skills 영역 end */}
            </div>
            
            <div className="half-page">
                {/* Career 영역 start */}
                <div>
                    <h1> Career</h1>
                    <div style={{ marginBottom: '5px' }}>
                        주식회사 지농 2022-08 ~ 2023-07
                        <br />
                        해당 사업의 관제시스템 웹/앱(flutter) 개발, 유지보수
                    </div>
                </div>
                {/* Career 영역 end */}

                {/* Education 영역 start */}
                <div style={{ marginBottom: '5px' }}>
                    <h1>Education</h1>
                    <div style={{ marginBottom: '5px' }}>
                        비트교육센터
                        <br />
                        2022-01 ~ 2022-08
                        <br />
                        웹서비스를 활용한 딥러닝 개발자 과정(NCS)
                    </div>
                </div>
                {/* Education 영역 end */}

                {/* Project 영역 start */}
                <div>
                    <h1>Project</h1>
                    <div className="project-ima"></div>
                </div>
                {/* Project 영역 end */}
            </div>
        </div>
    )
}