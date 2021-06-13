import React, { useState } from "react";

const FormComponent = ({ setMyData, myData }) => {
  const [subArr, setSubArr] = useState([]);
  const [chartObj, setChartObj] = useState({});
  //   const [tempObj, setTempObj] = useState({});
  const abck = (num) => {
    let arr = [];
    for (let index = 0; index < num; index++) {
      arr.push(index + 1);
    }
    setSubArr(arr);
  };
  const RenderSubjects = () => {
    return (
      <div>
        {subArr &&
          subArr.map((sub) => {
            return (
              <div key={sub}>
                <label key={`sub ${sub}`}>
                  {`Sub ${sub} Name`}
                  <input
                    type="text"
                    name={`subname ${sub}`}
                    id={`subname ${sub}`}
                  />
                </label>
                <label key={`mark ${sub}`}>
                  {`Sub ${sub} Marks`}
                  <input
                    type="number"
                    name={`submarks ${sub}`}
                    id={`submarks ${sub}`}
                  />
                </label>
              </div>
            );
          })}
      </div>
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var obj = [];
    var chartData = {};
    obj.subjects = [];
    obj.stuName = document.getElementById("stuName").value;
    obj.stuClg = document.getElementById("stuClg").value;
    obj.stuSem = document.getElementById("stuSem").value;
    subArr &&
      subArr.map((sub) => {
        let mySub = `subname ${sub}`;
        let subName = document.getElementById(mySub).value;
        let mySubMar = `submarks ${sub}`;
        let subMar = document.getElementById(mySubMar).value;

        let finalObj = {
          name: subName,
          marks: subMar,
        };
        obj.subjects.push(finalObj);
      });

    // setTempObj(obj);

    chartData.labels = obj.subjects.map((nameobj) => {
      return nameobj.name;
    });
    chartData.datasets = [];
    let datasetObj = {};
    datasetObj.label = "Test";
    datasetObj.data = obj.subjects.map((nameobj) => {
      return nameobj.marks;
    });
    datasetObj.backgroundColor = [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
    ];

    datasetObj.borderColor = [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ];
    datasetObj.borderWidth = 1;
    chartData.datasets.push(datasetObj);
    console.log("testttiinnnnnggg", chartData);
    setMyData(chartData);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" id="stuName" />
        </label>
        <label>
          College:
          <input type="text" name="clg" id="stuClg" />
        </label>
        <label>
          Semester:
          <input type="number" name="sem" id="stuSem" />
        </label>
        <label>
          No of Sub
          <input
            type="number"
            name="subno"
            onChange={(e) => {
              console.log(e.target.value);
              abck(e.target.value);
            }}
          />
        </label>
        {subArr.length ? <RenderSubjects /> : null}
        <br />
        <input className="btn btn-dark" type="submit" value="Generate Chart" />
      </form>
    </div>
  );
};

export default FormComponent;
