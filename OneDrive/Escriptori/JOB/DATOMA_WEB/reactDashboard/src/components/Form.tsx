import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

interface IData{
  name:string
  age: number
  mood: string
  weight?: number
}
 
const Form = () => {
  const [name, setName] = useState<String>('');
  const [age, setAge] = useState<number>();

  const [mode, setMode] = useState<String>('');
  const [weight ,setWeight] =useState<Boolean>(false);

  const [handleSubmit, setHandleSubmit] = useState<Array<IData>([]);
  return (
      <div>
          <div className="card">
              <h5>Addons</h5>
              <div className="grid p-fluid">
                  <div className="col-12 md:col-4">
                      <div className="p-inputgroup">
                          <span className="p-inputgroup-addon">
                              <i className="pi pi-user"></i>
                          </span>
                          <InputText placeholder="Username" />
                      </div>
                  </div>

                  <div className="col-12 md:col-4">
                      <div className="p-inputgroup">
                          <span className="p-inputgroup-addon">$</span>
                          <InputNumber placeholder="Price" />
                          <span className="p-inputgroup-addon">.00</span>
                      </div>
                  </div>

                  <div className="col-12 md:col-4">
                      <div className="p-inputgroup">
                          <span className="p-inputgroup-addon">www</span>
                          <InputText placeholder="Website" />
                      </div>
                  </div>
              </div>


              <Button label="Search" onClick={handleSubmit}/>
         
          </div>
      </div>
  );
}

export default Form