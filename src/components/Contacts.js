import React, { Component } from 'react'

export class Contacts extends Component {
  render() {
    return (
        <div className='contactpage'>
            <br></br>
            <br></br>
            <h2>Contact us</h2> <br></br>
            <span>For any queries about our products or corporate/bulk order, feel free to contact us. We will be happy to help you.</span>
            <div class="container">
                <label>First Name</label>
                <input type="text" id='fname' name='firstname' placeholder='Your name..' />

                <label>Last Name</label>
                <input type="text" id='lname' name='lastname' placeholder='Your last name..' />

                <label for="country">Country</label>
                <select id='country' name='country'>
                    <option value="kazakhstan">Kazakhstan</option>
                    <option value="russia">Russia</option>
                    <option value="kirgizistan">Kirgizistan</option>
                    <option value="belarus">Belarus</option>
                </select>

                <label for="subject">subject</label>
                <textarea className='message' id="subject" name='subject' placeholder='Write message..'></textarea>
                <br></br><br></br><br></br><br></br>
                <input type="submit" value="Send" />
            </div>
            <br></br>
            <br></br>
            <div className='contactinfo'>
                <h3>Contact info</h3>
                <span>Email: support@HouseGarden.com</span><br></br>
                <span>Phone: 87772389456</span>
                <br></br>
                <br></br>

                <h3>Opening hours</h3>
                <span>Monday to Saturday: 9am - 6pm</span><br></br>
                <span>Sundays: Holiday</span>
                <br></br>
                <br></br>

                <h3>POSTAL ADDRESS</h3>
                <span>Implexians Eco Solutions Pvt Ltd. No. 3788, 2nd Floor, 13 th Cross BSK 2nd Stage, Next to Muthoot Finance, Bengaluru, Karnataka 560070</span>
            </div>

        </div>
    )
  }
}

export default Contacts