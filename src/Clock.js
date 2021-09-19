
import React from 'react';
import './Clock.css';


class Clock extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               time: "",

          };
     }
     fun(){

          setInterval(() => {
               this.setState({ time: Date() })

          }, 1000);

     }
     
     render() {
          return (
               <div className="box">
                    <h1>Digital Watch!!</h1>
                    < br />
                    <h2>Press the button for Time </h2>
                    <br />
                    <div className="watch">
                    <h1>
                         {this.state.time}
                    </h1>
                    </div>
                    <br />
                    <button className="btn" onClick={() => this.fun()}>Clck Me</button>



                    {/*                     
                    <div className="heading">
                         Login Here!!
                    </div>

                    <div className="fields">
                         <form>

                              <b className="username">Username</b>
                              <input type='text' placeholder="username"
                                   onChange={(e) => { this.setState({ email: e.target.value }) }}
                              />

                              <br></br>

                              <b className="password">Password</b>
                              <input type='password' placeholder="password"
                                   onChange={(e) => { this.setState({ password: e.target.value }) }}

                              />


                              <br></br>
                              <button className="btn" onClick={() => this.submit()}>Login</button>
                         </form>

                    </div>
                    <footer className="footer">
                         Sample lorem ipsum copy:

                         “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.”
                    </footer> */}

               </div>

          )


     }
}

export default Clock;

