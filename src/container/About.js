import React from 'react';
import '../App.css'

export default function About() {
    return (

        <div >
            {/* 백그라운드 영역start */}
            <div className='background-ima'>
                <div  className='background-text'>
                    <div className='background-name'> - 전종현 -
                    </div>
                    <p className='background-font'>웹 개발자 포트폴리오<br/>
                    ㅡ
                    </p>
                    <div>안녕하세요.
                        <br />
                        웹 풀스택을 지향하는 개발자입니다.
                        <br />
                        저의 블로그를 방문해주셔서 감사합니다.
                    </div>
                </div>
            </div>
            {/* 백그라운드 영역end */}
            
            <h1>
                About Me
            </h1>

            {/* 내 정보 table start */}
            <div>
                <table class="type03">
                    <tr>
                        <th scope="row">이름</th>
                        <td>전종현</td>
                        <th scope="row">생년월일</th>
                        <td>1998-08-14</td>
                    </tr>
                    <tr>
                        <th scope="row">연락처</th>
                        <td>010-8720-1491</td>
                        <th scope="row">이메일</th>
                        <td>jjh980814@naver.com</td>
                    </tr>
                    <tr>
                        <th scope="row">주소지</th>
                        <td>천안시 서북구 성환읍 안궁1길 35</td>
                        <th scope="row">학력</th>
                        <td>방송통신대학교 재학중(2023~)</td>
                    </tr>
                </table>
            </div>
            {/* 내 정보 table end */}
            


        </div>

    )
}