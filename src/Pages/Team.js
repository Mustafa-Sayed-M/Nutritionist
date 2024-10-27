import React from 'react';
import { useLocation } from 'react-router-dom';
import { TEAM_CATEGORIES } from '../Data/constantData';
import Header from '../Components/Shared/Header';
import TeamGrid from '../Components/Team/TeamGrid/TeamGrid';
import ApplyNow from '../Components/Team/ApplyNow';
import NavFilter from '../Components/Shared/NavFilter';
import teamData from '../Data/teamData.json';
import TeamGridSkeleton from '../Components/Team/TeamGrid/Skeleton/TeamGridSkeleton';

function Team() {

    const { pathname } = useLocation();

    const [teamFiltered, setTeamFiltered] = React.useState(teamData);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if (pathname === '/team') {
                setTeamFiltered(teamData);
            } else {
                setTeamFiltered(teamData.filter(teamItem => teamItem.category === pathname.split('/team/')[1].replaceAll('+', ' ')));
            }
            setLoading(false);
        }, 500);
    }, [pathname]);

    return (
        <div className='Team-page py-7'>
            <div className='container space-y-7'>
                {/* Header */}
                <Header
                    title={'Meet Our Team of Experts'}
                    description={'Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.'}
                />
                {/* Nav Filter */}
                <NavFilter
                    page={'/team'}
                    filterList={TEAM_CATEGORIES}
                />
                {/* Team Grid */}
                {
                    loading ? (
                        <TeamGridSkeleton />
                    ) : (
                        <TeamGrid teamList={teamFiltered} />
                    )
                }
                {/* Apply Now */}
                <ApplyNow />
            </div>
        </div>
    )
}

export default Team;