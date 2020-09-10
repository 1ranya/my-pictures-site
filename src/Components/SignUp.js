import React from 'react';

function Signup() {
    return (
        <section class="hero is-fullheight gradientBackground">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div className="circle-big"></div>
                    <div className="circle-small"></div>
                        <div class="columns is-mobile">
                            <div class="column signUpLeft">
                            </div>
                            <div class="column signUpRight">
                                <div class="card-content">
                                    <h1 className="titleRegistration title">Registration</h1>
                                    <div class="field">
                                        <label class="label labelRegistration">Name</label>
                                        <div class="control">
                                            <input class="input is-rounded inputCostum" type="text" placeholder="Text input" />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label labelRegistration">Username</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input is-success is-rounded inputCostum" type="text" placeholder="Text input" value="" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-user"></i>
                                            </span>
                                            <span class="icon is-small is-right">
                                                <i class="fas fa-check"></i>
                                            </span>
                                        </div>
                                        {/* <p class="help is-success">This username is available</p> */}
                                    </div>

                                    <div class="field">
                                        <label class="label labelRegistration">Email</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input is-danger is-rounded inputCostum" type="email" placeholder="Email" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                            <span class="icon is-small is-right">
                                                <i class="fas fa-exclamation-triangle"></i>
                                            </span>
                                        </div>
                                        {/* <p class="help is-danger">This email is invalid</p> */}
                                    </div>
                                    <div class="field">
                                        <label class="label labelRegistration">Password</label>
                                        <p class="control has-icons-left">
                                            <input class="input is-rounded inputCostum" type="password" placeholder="Password" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-lock"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <label class="checkbox labelRegistration">
                                                <input type="checkbox" className="checkboxCostum" />
                                                I agree to the <a href="#" style={{color: "rgb(105, 1, 83)"}}>terms and conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button class="button is-info is-rounded bottomCostum">Submit</button>
                                        </div>
                                        <div class="control">
                                            <button class="button is-rounded bottomCostumCancel">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="circle-medium"></div>
                </div>
            </div>
        </section>
    )
}
export default Signup;




