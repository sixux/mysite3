import '../../assets/style/components/home/Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import useHome from '../../hooks/home/useHome';

const Home = () => {
    const {
        projects,
        activeCategory,
        handleCategoryChange,
        isDarkMode,
        toggleDarkMode
    } = useHome();

    return (
        <div className={`home-container ${isDarkMode ? 'dark' : ''}`}>
            <section className="introm-preview">
                <div className="theme-toggle">
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
                    </button>
                </div>
                <h2>Hello, I`m [Choi Siiiuuu]</h2>
                <p>저는 시우에용~~~~~~~~~~~~~~~~~~~ </p>
                <Link to="/about-me" className="read-more">더 알아보기</Link>
            </section>

            <section className="projects-section">
                <h2>Featured projects</h2>
                <div className="project-filters">
                    <button
                    className={activeCategory === 'All' ? 'active' : ''}
                    onClick={() => handleCategoryChange('All')}
                    >
                        All
                    </button>
                    <button
                    className={activeCategory === 'Web' ? 'active' : ''}
                    onClick={() => handleCategoryChange('Web')}
                    >
                        Web
                    </button>
                    <button
                    className={activeCategory === 'Design' ? 'active' : ''}
                    onClick={() => handleCategoryChange('Design')}
                    >   
                        Design
                    </button>
                </div>

                <div className="project-cards">
                    {projects.length > 0 ? (
                        projects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{projects.description}</p>
                                <Link to={project.link} target="_blank"
                                rel="noopener noreferrer" className="view-button">
                                    View project Link
                                </Link>
                            </div>
                        </div>
                        ))
                    ) : (
                         <p className="loading-message">프로젝트를 로딩 중입니다...</p>
                     )}
                    </div>
                    <Link to="/gallery" className="see-all">모든 프로젝트 보기</Link>
            </section>

             <section className="latest-posts">
                <h2>Latest Posts</h2>
                <div className="post-preview">
                    <h3>React 학습기</h3>
                    <p>리액트를 배우면서 겪은 시행착오와 배운 점들을 공유합니다.</p>
                    <Link to="/blog" className="read-post">읽어보기</Link>
                </div>
             </section>
        </div>
    );

}


export default Home;