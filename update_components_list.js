
//list off all mechanic knowledge bullets as strings?
const semiTools = ` - Helium Leak Detector
 - Alum-a-Lift (raise/lower chemical Showerheads)
 - Pneumatic Lift Pistons
 - Generic Mechanical Tools (Torque wrenches, bits/sockets, wire cutters, etc.)
 - Multimeter
 - Digital Calipers (measure pin height)
 - Laser Alignment Lids
 - Micrometers (leveling/centering)
 - Vacuum Pumps
 - LOTO kits
 - TLD (Toxic Leak Detector)`;
const aviTools = ` - Radar Test Equipment
 - Fire Extinguisher
 - Forklift
 - Jammer Vehicle (to install targeting pods on pylons)
 - Chaff/flare testers
 - Safety wire pliers
 - Borescope
 - Fuel quantity test set `;
const compKnowledge = ` - PLC (Programmable Logic controllers)
 - Interlocks (Software/Hardware)
 - Digital/Analog I/Os(inputs/outputs)
 - Pressure transducers
 - Differential pressure sensors
 - Throttle valves
 - Thermocouples
 - Gas lines
 - Pneumatic/Hydraulic operations
 - Parts ordering/inventory`;

//set html div elements
document.getElementById('semiTools').textContent = semiTools;
document.getElementById('aviTools').textContent = aviTools;
document.getElementById('compKnowledge').textContent = compKnowledge;