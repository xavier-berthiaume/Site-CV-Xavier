import InfoBox from "./info-box/InfoBox";

function SkillLayout() {

  return (
    <div className="layout-block" id="skills">
      <h1 className="block-header">Education and Previous Work</h1>
      
      <InfoBox>
        <h3>Pharmacy Technician</h3>
        <h5>Pharmacie Jean Coutu</h5>
       
        <h5>Work Details</h5>
        <p>
          As a pharmacy technician, I was tasked with preparing medication for dispensing, 
          as well as making sure that the data within the pharmacy database software is 
          consistent with the real-world status of a patients health record.
          With the ever-changing state of healthcare, and the complexity of drug insurance 
          policies, it was my role to also act as an interface for patients between them and 
          the overall healthcare system.
          My biggest takeaway from this work is the importance of client-proximity to best
          understand what a client needs, sometimes taking the time to better educate a client
          so that they themselves better understand what they need, instead of what they want.
        </p>
       
        <h5>Competencies</h5>
        <ul>
          <li>Performing in a high stress environment</li>
          <li>Working hand in hand with a team composed of many different roles (pharmacists, technicians, insurance specialists, doctors, nurses)</li>
          <li>Rapidly learning about new health policy and its impact on workers, as well as patients</li>
          <li>Working directly with patients, ultimately being their interface into the healthcare system</li>
        </ul>
      </InfoBox>
     

      <InfoBox>
        <h3>Junior Programmer</h3>
        <h5>Bombardier Aeronautique</h5>

        <h5>Work Details</h5>
        <p>
          As a junior programmer working at Bombardier, my role was to automate tasks that were 
          normally done in Microsoft Exel using Visual Basic. I would first learn about the 
          daily tasks completed by engineers and what data metrics they would gather manually.
          After, I would write VBA scripts to collect the relevant data, generating sheets of 
          compiled data.
        </p>

        <h5>Competencies</h5>
        <ul>
          <li>Write VBA scripts that acted as individual modules used by non-technical clients</li>
          <li>Automate manual data manipulations and generate a human-readable compilation</li>
          <li>Strong comprehension of Excel</li>
        </ul>
      </InfoBox>

    </div>
  );

};

export default SkillLayout;
