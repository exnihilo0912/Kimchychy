import { connect } from "react-redux";
import propTypes from 'prop-types';
import styled from 'styled-components';
import S from '../components/statuses';
import { Icon } from 'antd';

const StyledStatus = styled.div`
  grid-area: plus;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
    font-size: 1.8rem;
`;


function ItemStatus({ status = '' }) {

        return (
            <StyledStatus>
                {
                    (() => {
                        switch (status) {
                            case S.UNKNOWN:
                            default:
                                return <StyledIcon type="question-circle" theme="twoTone" twoToneColor="#c1c1c1" />;
                            case S.LEARNED:
                                return <StyledIcon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />;
                            case S.MASTERED:
                                return <StyledIcon type="star" theme="twoTone" twoToneColor="#f1c40f"/>;
                        }
                    })()
                }
            </StyledStatus>
        );
}

ItemStatus.propTypes = {
    status: propTypes.string
};

export default ItemStatus;

