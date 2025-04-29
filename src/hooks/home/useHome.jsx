import { useState, useEffect, useMemo } from 'react';
import yoojaesukImg from '../../assets/images/강아지.jpg';
import siu1 from '../../assets/images/강아지1.jpg';
import siu2 from '../../assets/images/강아지2.jpg';

function useHome() {
	// 샘플 프로젝트 데이터를 useMemo로 관리해 재계산 방지
	const allProjects = useMemo(() => [
		{
			id: 1,
			title: "Shopping App",
			description: "React 기반 쇼핑 앱 프로젝트",
			image: yoojaesukImg,
			category: "Web",
			link: "https://example.com/weather-app"
		},
		{
			id: 2,
			title: "Todo List",
			description: "리액트 상태관리를 배운 TODO 리스트",
			image: siu1,
			category: "Web",
			link: "https://example.com/weather-app"
		},
		{
			id: 3,
			title: "Portfolio Site",
			description: "나의 작업을 보여주는 포트폴리오",
			image: siu2,
			category: "Web",
			link: "https://example.com/weather-app"
		},
		{
			id: 4,
			title: "Mobile UI Design",
			description: "모바일 앱 UI/UX 디자인",
			image: "https://via.placeholder.com/300x200",
			category: "Design",
			link: "https://example.com/weather-app"
		}
	], []);

	// 상태 관리를 위한 useState 훅 사용
	const [projects, setProjects] = useState([]);
	const [activeCategory, setActiveCategory] = useState('All');
	const [isDarkMode, setIsDarkMode] = useState(false);

	// 컴포넌트 마운트 시 데이터 로딩을 시뮬레이션하는 useEffect 훅
	useEffect(() => {
		// 데이터 로딩 시뮬레이션
		const timer = setTimeout(() => {
			setProjects(allProjects);
		}, 500);

		return () => clearTimeout(timer);
	}, [allProjects]);

	// 카테고리 변경 시 프로젝트 필터링을 위한 useEffect
	useEffect(() => {
		if (activeCategory === 'All') {
			setProjects(allProjects);
		} else {
			const filtered = allProjects.filter(project => project.category === activeCategory);
			setProjects(filtered);
		}
	}, [activeCategory, allProjects]);

	// 다크모드 상태가 변경될 때 body 클래스 업데이트
	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [isDarkMode]);

	// 카테고리 변경 핸들러
	const handleCategoryChange = (category) => {
		setActiveCategory(category);
	};

	// 다크모드 토글 핸들러
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return {
		projects,
		activeCategory,
		handleCategoryChange,
		isDarkMode,
		toggleDarkMode
	};
}

export default useHome;