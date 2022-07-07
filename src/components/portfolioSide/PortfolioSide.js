import React, { Suspense } from 'react';
import Title from '../title/Title';
import CardList from '../cardList/CardList';
import SkeletonLoader from './../skeletonLoader/SkeletonLoader';
import { portfolios } from './../../@fake-db/db/portfolios-db';
import withCustomScroll from './../../hoc/withCustomScroll';
import './PortfolioSide.scss';

const Card = React.lazy(() => import('../card/Card'));

class PortfolioSide extends React.Component{

    state = {
        portfolios
    }

    render(){
        return(
            <>
                <Title>Portfolios</Title>
                <div className="row mb-5 justify-content-center">
                    <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" className="d-block m-3 text-white o-btn text-center py-2 position-relative" target="_blank">Upwork Profile</a>
                </div>
                <CardList>
                    {
                        this.state.portfolios.map(item => (
                            <Suspense key={item.id} fallback={<SkeletonLoader />}>
                                <Card {...item} />
                            </Suspense>
                        ))
                    }
                </CardList>
            </>
        );
    }
}

export default withCustomScroll(PortfolioSide);