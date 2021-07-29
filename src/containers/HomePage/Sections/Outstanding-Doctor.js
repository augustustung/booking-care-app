import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux';

import Slider from "react-slick";

class Specialty extends Component {
    render() {
        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-sec" >Bác sĩ nổi bật tuần qua</span>
                        <button className="btn-sec">TÌM KIẾM</button>
                    </div>
                <div className="section-body">
                    <Slider {...this.props.settings}>
                        <div className="section-customize">
                            <div className="customize-border">
                                <div className="outer-bg">
                                    <div className="bg-img section-outstanding-doctor"/>
                                </div>
                                <div className="position text-center">
                                    <div>Giáo sư, Tiến sĩ Bùi Huy Tùng</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-customize">
                            <div className="customize-border">
                                <div className="outer-bg">
                                    <div className="bg-img section-outstanding-doctor"/>
                                </div>
                                <div className="position text-center">
                                    <div>Giáo sư, Tiến sĩ Bùi Huy Tùng</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-customize">
                            <div className="customize-border">
                                <div className="outer-bg">
                                    <div className="bg-img section-outstanding-doctor"/>
                                </div>
                                <div className="position text-center">
                                    <div>Giáo sư, Tiến sĩ Bùi Huy Tùng</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-customize">
                            <div className="customize-border">
                                <div className="outer-bg">
                                    <div className="bg-img section-outstanding-doctor"/>
                                </div>
                                <div className="position text-center">
                                    <div>Giáo sư, Tiến sĩ Bùi Huy Tùng</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-customize">
                            <div className="customize-border">
                                <div className="outer-bg">
                                    <div className="bg-img section-outstanding-doctor"/>
                                </div>
                                <div className="position text-center">
                                    <div>Giáo sư, Tiến sĩ Bùi Huy Tùng</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-customize">
                            <div className="customize-border">
                                <div className="outer-bg">
                                    <div className="bg-img section-outstanding-doctor"/>
                                </div>
                                <div className="position text-center">
                                    <div>Giáo sư, Tiến sĩ Bùi Huy Tùng</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                
                </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
