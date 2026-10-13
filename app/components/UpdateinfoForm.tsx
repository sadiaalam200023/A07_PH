import React from 'react';

const UpdateinfoForm = () => {
    return (
        <div>
  <div> 
  <div className="px-10 mb-2 text-lg font-medium text-slate-700">তথ্য পরিবর্তন</div>
 
  <div className="flex flex-col gap-4 h-full rounded-[26px] border border-[#dfe7df] bg-[#fbfdfb] p-5 transition-shadow duration-200 hover:shadow-md sm:p-6">
    
    
    <div className="w-full">
      <fieldset className="fieldset w-full">
        <label className="fieldset-label mb-1 text-sm font-medium text-slate-600" htmlFor="name">নাম</label>
        <input type="text" id="name" className="input w-full" placeholder="নাম" />
      </fieldset>
    </div>
  
    
    <div className="w-full">  
      <label className="input validator w-full flex items-center gap-2">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input type="email" placeholder="mail@site.com" className="grow" required />
      </label>
      <div className="validator-hint hidden">Enter valid email address</div>
    </div>

   
    <div className="w-full">
      <label className="input validator w-full flex items-center gap-2">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </g>
        </svg>
        <input
          type="password"
          required
          placeholder="Password"
          className="grow"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
      </label>
      <div className="validator-hint hidden">
        Must be more than 8 characters, including number, lowercase, and uppercase letters
      </div>
    </div> 

   
    <div className="w-full mt-2">
      <button className="btn btn-block btn-primary">আপডেট</button>
    </div>

  </div>
</div>
</div>

    );
};

export default UpdateinfoForm;