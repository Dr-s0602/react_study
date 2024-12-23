import React from 'react';

const TsVsJsExample = () => {
    return (
        <div style={{ padding: '20px', lineHeight: '1.6' }}>
            <h1>TypeScript와 JavaScript의 차이</h1>

            {/* TypeScript 설명 */}
            <section>
                <h2>TypeScript란?</h2>
                <p>
                    TypeScript는 JavaScript의 상위 집합(Superset)으로, <strong>정적 타입 시스템</strong>과 <strong>향상된 코드 품질</strong>을 제공합니다.
                    마이크로소프트에서 개발했으며, JavaScript로 컴파일되어 브라우저와 호환됩니다.
                </p>
                <ul>
                    <li><strong>정적 타입 검사:</strong> 개발 중 타입 오류를 방지할 수 있어 디버깅 시간을 단축합니다.</li>
                    <li><strong>코드 자동 완성:</strong> IDE에서 더욱 풍부한 자동 완성과 코드 도움말을 제공합니다.</li>
                    <li><strong>ES6+ 지원:</strong> 최신 JavaScript 문법을 완벽히 지원합니다.</li>
                </ul>
            </section>

            {/* JavaScript 설명 */}
            <section>
                <h2>JavaScript란?</h2>
                <p>
                    JavaScript는 웹 브라우저에서 동작하는 프로그래밍 언어로, 클라이언트 및 서버 측에서 모두 사용 가능합니다.
                    TypeScript는 이 JavaScript를 기반으로 만들어졌습니다.
                </p>
                <ul>
                    <li><strong>동적 타입 언어:</strong> 실행 중에 타입이 결정되며, 타입 선언이 필요하지 않습니다.</li>
                    <li><strong>유연한 문법:</strong> 다양한 스타일로 코드를 작성할 수 있습니다.</li>
                    <li><strong>광범위한 생태계:</strong> 대부분의 웹 프레임워크 및 라이브러리가 JavaScript로 작성되어 있습니다.</li>
                </ul>
            </section>

            {/* 차이점 */}
            <section>
                <h2>TypeScript와 JavaScript의 주요 차이점</h2>
                <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>기능</th>
                            <th>JavaScript</th>
                            <th>TypeScript</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>타입 검사</td>
                            <td>런타임에서 발생</td>
                            <td>컴파일 단계에서 오류 확인 가능</td>
                        </tr>
                        <tr>
                            <td>코드 자동 완성</td>
                            <td>제한적</td>
                            <td>IDE에서 강력한 지원</td>
                        </tr>
                        <tr>
                            <td>객체 정의</td>
                            <td>자유로운 구조</td>
                            <td>명시적인 타입 선언</td>
                        </tr>
                        <tr>
                            <td>Null/Undefined 처리</td>
                            <td>오류가 발생할 가능성 높음</td>
                            <td>엄격한 타입 시스템으로 방지</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* 객체 생성 예제 */}
            <section>
                <h2>객체 생성 및 Null 처리</h2>
                <h3>JavaScript</h3>
                <pre>
                    {`
const user = { name: 'John', age: 30 }; // 객체 생성
console.log(user.address); // undefined 반환
// Null 또는 Undefined를 별도로 확인하지 않으면 오류 발생 가능
                    `}
                </pre>
                <h3>TypeScript</h3>
                <pre>
                    {`
type User = {
    name: string;
    age: number;
    address?: string; // 선택적 속성
};

const user: User = { name: 'John', age: 30 }; // 타입 명시
console.log(user.address); // 컴파일러가 안전성 확인
                    `}
                </pre>
                <p>
                    TypeScript는 `address`와 같은 선택적 속성(`?`)을 정의하여 Null/Undefined로 인한 오류를 방지합니다. 
                    또한, 객체 속성 접근 시 컴파일러가 타입 안전성을 보장합니다.
                </p>
            </section>

            {/* 결론 */}
            <section>
                <h2>결론</h2>
                <p>
                    TypeScript는 개발 생산성과 코드 안전성을 높여줍니다. 
                    특히, 대규모 프로젝트나 협업 환경에서 TypeScript는 잠재적인 오류를 줄이고 유지보수를 용이하게 합니다.
                </p>
                <p>
                    JavaScript는 여전히 강력하고 유연한 언어로, TypeScript는 JavaScript로 변환되므로 기존 JavaScript 프로젝트에서도 점진적으로 도입할 수 있습니다.
                </p>
            </section>
        </div>
    );
};

export default TsVsJsExample;
