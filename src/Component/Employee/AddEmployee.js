import React from 'react'
import './Emp.css'
export const AddEmployee = () => {
  return (
    <div>
        <div className="container-fluid product">
            <h4 className="heading">Add Employee</h4>
            <div className="product-container shadow">
                <form action="#" method="post">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Passwrod:</label>
                        <input type="text" id="email" name="Password" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Confirm Password:</label>
                        <input type="text" id="email" name="confirmPassword" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Phone:</label>
                        <input type="tel" id="email" name="Phone" required/>
                    </div>
                    <div class="form-group">
                        <label for="position">Position:</label>
                        <input type="text" id="position" name="position" required/>
                    </div>
                    <div class="form-group">
                        <label for="department">Department:</label>
                        <input type="text" id="department" name="department" required/>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Employee</button>
                </form>
            </div>
        </div>
    </div>
  )
}
