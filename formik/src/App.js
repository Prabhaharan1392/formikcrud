import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
const App = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          password: '',
          gender: '',
          date: '',
          income: '',
          about: '',
          social: [],
          hobbies: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <h1>FORMIK UI CRUD OPERATION</h1>
            <label>Name:</label>
            <Field name="name" type="text" />
            <br /> <br />
            <label>Phone:</label>
            <Field name="phone" type="number" />
            <br /> <br />
            <label>Password:</label>
            <Field name="password" type="password" />
            <br /> <br />
            <label>Gender</label>
            <br /> <br />
            <label>Male:</label>
            <Field name="gender" value="male" type="radio" />
            <label>Female:</label>
            <Field name="gender" value="female" type="radio" />
            <br /> <br />
            <label>Date:</label>
            <Field name="date" type="date" />
            <br /> <br />
            <label>Income:</label>
            <Field name="income" as="select">
              <option value="10000">rs 10000</option>
              <option value="20000">rs 20000</option>
              <option value="30000">rs 30000</option>
              <option value="40000">rs 40000</option>
              <option value="50000">rs 50000</option>
              <option value="60000">rs 60000</option>
            </Field>
            <br /> <br />
            <label>About:</label>
            <Field name="about" as="textarea" />
            <br /> <br />
            <label>Social:</label>
            <br /> <br />
            <label>Facebook:</label>
            <Field name="social[0]" type="text" />
            <br /> <br />
            <label>Twitter:</label>
            <Field name="social[1]" type="text" />
            <br /> <br />
            <FieldArray
              name="hobbies"
              render={(arrayHelpers) => (
                <div>
                  {values.hobbies && values.hobbies.length > 0 ? (
                    values.hobbies.map((hobby, index) => (
                      <div key={index}>
                        <Field name={`hobbies.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      {/* show this when user has removed all hobbies from the list */}
                      Add a Hobbies
                    </button>
                  )}
                </div>
              )}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
