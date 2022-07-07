import React from 'react';
import Title from '../title/Title';

const InfoItem = ({ infoTitle, infoValue }) => (
    <li className="mb-2">
        <div className="row">
            <div className="col-4 font-weight-bold">{infoTitle}</div>
            <div className="col-8">{infoValue}</div>
        </div>
    </li>
);

class InfoList extends React.Component{

    state = {
        allInfo: [
            {
                infoTitle: 'Age',
                infoValue: 23,
            },
            {
                infoTitle: 'Languages',
                infoValue: 'English, Hindi, Tamil',
            },
            {
                infoTitle: 'Nationality',
                infoValue: 'India',
            },
            {
                infoTitle: 'Address',
                infoValue: '1 RADHA KRISHNA NAGAR, S N DUBE RD DAHISAR E, NR SHANI MANDIR MUMBAI, MH 400068 IN',
  
            },
            {
                infoTitle: 'Freelancer',
                infoValue: 'from, 2020',
            },
        ]
    }

    render(){
        return(
            <>
                <Title>About</Title>
                <ul className="list-unstyled p-3">
                    {
                        this.state.allInfo.map((item, index) => (
                            <InfoItem key={index} {...item} />
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default InfoList;