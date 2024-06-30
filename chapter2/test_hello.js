import http from 'k6/http';

export const options = {
	vus: 200, // Virtual Users(가상 유저 수)
	duration: '10s', // 테스트 진행 시간
};

export default function () {
	http.get('http://localhost:8000');
}
