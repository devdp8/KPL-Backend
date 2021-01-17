const machineMaster = `
id varchar(100), 
area varchar(100), 
wing varchar(100), 
machineType varchar(100), 
machineNumber varchar(100), 
lineNumber varchar(100), 
zone varchar(100), 
floor varchar(100), 
machineName varchar(100), 
designatedArea varchar(100), 
designatedAreaId varchar(100)`;

const machineBreakdown = `
id varchar(100), 
machineID varchar(100), 
zone varchar(100),
wing varchar(100),
floor varchar(100), 
rpmValue varchar(100), 
createdAT timestamp, 
modifiedAT timestamp`;

const feedUnavailable = `
id varchar(100), 
machineID varchar(100), 
designatedAreaId varchar(100), 
startTime time, 
endTime time,
feedUnavailibilityDuration time, 
zone varchar(100), 
wing varchar(100), 
floor varchar(100), 
mediaSource varchar(100), 
createdAt timestamp, 
ModifiedAt timestamp`;

const defectDetails = `
id varchar(100), 
dateTime date, 
wing varchar(100), 
line varchar(100), 
table_no varchar(100), 
checker_name varchar(100), 
checker_emp_id varchar(100), 
shift varchar(100), 
currentDuration time, 
ctr_no varchar(100),
target int, 
pass_count int, 
rework int, 
herackle_open_stitch int, 
harackle_fabric_pressed int,
safety_open_stitch int, 
safety_stitch_miss int, 
safety_corner_damage int, 
safety_stitching_overlap int,
safety_fabric_pressed int, 
discharge_stitch_open int, 
discharge_filler_cord int,
top_label_doc_pkt int, 
accessories_stitch_miss int, 
accessories_stitching_overlap int,
folding int, 
juki int, 
baffle int, 
others int`;

const ctrMaster = `
id varchar(100), 
ctrNumber varchar(100), 
clpNumber varchar(100), 
fabricType varchar(100), 
category varchar(100), 
gsm varchar (100)`;

const workerUnavailable = `
id varchar(100), 
workerID varchar(100), 
machineID varchar(100),
zone varchar(100), 
wing varchar(100), 
floor varchar(100), 
unavailableDuration time, 
flag int, 
mediaSource varchar(100), 
createdAt timestamp, 
modifiedAt timestamp`;

const workerShiftDetails = `
id varchar(100), 
assignedGroup varchar(100), 
shift varchar(100), 
workerID varchar(100), 
workerName varchar(100), 
lineResourceId varchar(100), 
contractorName varchar(100),
operation varchar(100), 
machineNumber varchar(100),
createdAt timestamp, 
modifiedAt timestamp`;

const stitchingSchedule = `
id varchar(100), 
ctrNumber varchar(100), 
machineID varchar(100),
machineName varchar(100), 
supervisor varchar(100), 
workerID varchar(100), 
workerShift varchar(100), 
startTime timestamp, 
endTime timestamp, 
createdAt timestamp, 
modifiedAt timestamp`;

module.exports = {machineMaster, machineBreakdown, feedUnavailable, defectDetails, ctrMaster, workerUnavailable, workerShiftDetails, stitchingSchedule};