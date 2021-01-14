import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth0()

    return(
    <div>
        { isAuthenticated?
        <div id="protectedRoute">
            <div className="container">
                <div className="col-md-8">
                    <div className="row">
                        <div className="section-title">
                            <form name="sentMessage" id="protectedForm" noValidate method="POST" data-netlify="true">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Name"
                                required="required"
                            />
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                                required="required"
                            />
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Message"
                        required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : ""}
    </div>
    );
}

export default ProtectedRoute;