// js/main.ts

// Define the MajorCredits interface with a brand property
interface MajorCredits {
  credits: number;
  brand: 'major'; // Unique identifier
}

// Define the MinorCredits interface with a brand property
interface MinorCredits {
  credits: number;
  brand: 'minor'; // Unique identifier
}

// Function to sum two MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major', // Ensures the returned object maintains the MajorCredits brand
  };
}

// Function to sum two MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor', // Ensures the returned object maintains the MinorCredits brand
  };
}

// Example usage
const mathCredits: MajorCredits = { credits: 3, brand: 'major' };
const physicsCredits: MajorCredits = { credits: 4, brand: 'major' };
const totalMajorCredits = sumMajorCredits(mathCredits, physicsCredits);
console.log(`Total Major Credits: ${totalMajorCredits.credits}`); // Outputs: Total Major Credits: 7

const historyCredits: MinorCredits = { credits: 2, brand: 'minor' };
const artCredits: MinorCredits = { credits: 3, brand: 'minor' };
const totalMinorCredits = sumMinorCredits(historyCredits, artCredits);
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`); // Outputs: Total Minor Credits: 5

