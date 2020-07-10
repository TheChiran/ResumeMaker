import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //icons
  faEdit = faEdit;
  faAdd = faPlus;
  faWeb = faGlobe;
  faEmail = faEnvelope;
  faPhone = faPhone;
  faCross = faCross;

  background='red';
  inputWidth='50%';


  name:string='John Doe';
  nameInputStyle='none';
  nameAddBtnStyle='block';
  nameEditBtnStyle='none';

  email:any='example@gmail.com';
  emailInputDisplay:any='none';
  emailAddbtn='block';
  emailEditbtn='none';

  phone:any = '+8801869701485';
  phoneInputDisplay:any='none';
  phoneAddbtn='block';
  phoneEditbtn='none';

  personalWebsite:any='https://example.com';
  personalWebsiteInputDisplay:any='none';
  personalWebsiteAddBtn:any='block';
  personalWebsiteEditBtn:any='none';

  experience:any=[];
  position:any='';
  company:any='';
  year:any='';
  experienceAddBtn:any='block';
  experienceForm = new FormGroup({
    position: new FormControl(),
    company: new FormControl(),
    year: new FormControl()
  });

  education:any=[];
  institute:any='';
  graduationYear:any='';
  degreeType:any='';
  degreeName:any='';
  educationAddBtn:any='block';
  educationForm = new FormGroup({
    institute: new FormControl(),
    graduationYear: new FormControl(),
    degreeType: new FormControl(),
    degreeName: new FormControl()
  });

  profile:any='Lorem Ipsum';
  profileInputDisplay:any='block';
  profileDisplay:any='none';

  skill:any=[];
  skillName:any='';
  skillForm = new FormGroup({
    skillName: new FormControl()
  });
  skillAddBtn='block';
  skillDeleteBtn='block';
  
  title = 'resumeMaker';
  
  paddingBottom:any='15px';
  paddingBottomValue=15;

  addName(){
    this.nameInputStyle='block';
  }
  setName(name){
    this.name=name;
    this.nameInputStyle='none';
    this.nameAddBtnStyle='none';
    this.nameEditBtnStyle='block';
    //console.log(this.name);
  }
  changeName(){
    this.nameInputStyle='block';
  }
  //to set for preview mode
  namePreviewMode(){
    this.nameAddBtnStyle='none';
    this.nameEditBtnStyle='none';
  }
  enableNameEditMode(){
    this.nameEditBtnStyle='block';
  }

  addEmail(){
    this.emailInputDisplay='block';
  }
  setEmail(email){
    this.email=email;
    this.emailInputDisplay='none';
    this.emailEditbtn='block';
    this.emailAddbtn='none';
  }
  editEmail(){
    this.emailInputDisplay='block';
  }
  emailPreviewMode(){
    this.emailAddbtn='none';
    this.emailEditbtn='none';
  }
  enableEmailEditMode(){
    this.emailEditbtn='block';
  }

  addPhone(){
    this.phoneInputDisplay='block';
  }
  setPhone(phone){
    this.phone=phone;
    this.phoneInputDisplay='none';
    this.phoneEditbtn='block';
    this.phoneAddbtn='none';
  }
  editPhone(){
    this.phoneInputDisplay='block';
  }
  phonePreviewMode(){
    this.phoneAddbtn='none';
    this.phoneEditbtn='none';
  }
  enablePhoneEditMode(){
    this.phoneEditbtn='block';
  }

  addWebsite(){
    this.personalWebsiteInputDisplay='block';
  }
  setWebsite(website){
    this.personalWebsite=website;
    this.personalWebsiteInputDisplay='none';
    this.personalWebsiteAddBtn='none';
    this.personalWebsiteEditBtn='block';
  }
  editWebsite(){
    this.personalWebsiteInputDisplay='block';
  }
  websitePreviewMode(){
    this.personalWebsiteAddBtn='none';
    this.personalWebsiteEditBtn='none';
  }
  enablePersonalWebsiteEditMode(){
    this.personalWebsiteEditBtn='block';
  }

  //to add experience
  setPosition(position){
    this.position=position;
  }
  setCompany(company){
    this.company=company;
  }
  setYear(year){
    this.year=year;
  }
  addExperience(){
    this.experienceForm.setValue({position: this.position, company: this.company ,year: this.year});
    this.experience.push(this.experienceForm.value);
    this.experienceFormReset();
    this.addPadding();
    //console.log(this.experience);
  }
  experienceFormReset(){
    this.position='';
    this.year='';
    this.company='';
  }
  deleteExperience(index){
    this.experience.splice(index,1);
  }
  enableExperienceEditMode(){
    this.experienceAddBtn='block';
  }
  experiencePreviewMode(){
    this.experienceAddBtn='none';
  }

  //education
  setInstitue(institute){
    this.institute=institute;
  }
  setGraduationYear(year){
    this.graduationYear=year;
  }
  setDegreeType(type){
    this.degreeType=type;
  }
  setDegreeName(name){
    this.degreeName=name;
  }
  addEducation(){
    this.educationForm.setValue({institute: this.institute,graduationYear: this.graduationYear,
      degreeType: this.degreeType, degreeName: this.degreeName});
      this.education.push(this.educationForm.value);
      this.educationFormReset();
      this.addPadding();
  }
  educationFormReset(){
    this.institute='';
    this.graduationYear='';
    this.degreeType='';
    this.degreeName='';
  }
  deleteEducation(index){
    this.education.splice(index,1);
  }
  enableEducationEditMode(){
    this.educationAddBtn='block';
  }
  enableEducationPreviewMode(){
    this.educationAddBtn='none';
  }

  //profile
  setProfile(profile){
    this.profile=profile;
    //console.log(this.profile);
  }
  enableProfilePreviewMode(){
    this.profileInputDisplay='none';
    this.profileDisplay='block';
  }
  enableProfileEditMode(){
    this.profileInputDisplay='block';
    this.profileDisplay='none';

  }

  //skill
  setSkill(skill){
    this.skillName=skill;
  }
  adSkill(){
    this.skillForm.setValue({skillName: this.skillName});
    this.skill.push(this.skillForm.value);
    this.skillFormReset();
  }
  skillFormReset(){
    this.skillName='';
  }
  enableSkillEditMode(){
    this.skillAddBtn='block';
  }
  enableSkillPreviewMode(){
    this.skillDeleteBtn='none';
    this.skillAddBtn='none';
  }
  deleteSkill(index){
    this.skill.splice(index,1);
  }

  //image
  url:any = '';
  fileInputDisplay:any='block';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  enableFilePreviewMode(){
    this.fileInputDisplay='none';
  }
  enableFileChangeMode(){
    this.fileInputDisplay='block';
  }
  //to add padding on add experience and education
  addPadding(){
    this.paddingBottomValue += 100;
    this.paddingBottom = `${this.paddingBottomValue}px`;
  }
  //to set for edit mode
  editMode(){
    this.enableNameEditMode();
    this.enableEmailEditMode();
    this.enablePhoneEditMode();
    this.enablePersonalWebsiteEditMode();
    this.enableExperienceEditMode();
    this.enableEducationEditMode();
    this.enableProfileEditMode();
    this.enableSkillEditMode();
    this.enableFileChangeMode();
  }
  //to see on preview mode
  previewMode(){
    this.namePreviewMode();
    this.emailPreviewMode();
    this.phonePreviewMode();
    this.websitePreviewMode();
    this.experiencePreviewMode();
    this.enableEducationPreviewMode();
    this.enableProfilePreviewMode();
    this.enableSkillPreviewMode();
    this.enableFilePreviewMode();
  }

  public exportDocument()  
  {  
    var data = document.getElementById('exportContents');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }
}
