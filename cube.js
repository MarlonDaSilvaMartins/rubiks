const faceU = ["G","G","G","G","G","G","G","G","G"];
const faceL = ["R","R","R","R","R","R","R","R","R"];
const faceF = ["W","W","W","W","W","W","W","W","W"];
const faceR = ["O","O","O","O","O","O","O","O","O"];
const faceB = ["Y","Y","Y","Y","Y","Y","Y","Y","Y"];
const faceD = ["B","B","B","B","B","B","B","B","B"];

const moves = ['U', 'L', 'F', 'R', 'B', 'D'];
const invertMoves = ['U\'', 'L\'', 'F\'', 'R\'', 'B\'', 'D\''];

function uMove(){
    movement(faceU);
    sideMovement("U", faceB, faceR, faceF, faceL);
}

function lMove(){
    movement(faceL);
    sideMovement("L", faceU, faceF, faceD, faceB);
}

function fMove(){
    movement(faceF);
    sideMovement("F", faceU, faceR, faceD, faceL);
}

function rMove(){
    movement(faceR);
    sideMovement("R", faceU, faceB, faceD, faceF);
}

function bMove(){
    movement(faceB);
    sideMovement("B", faceU, faceL, faceD, faceR);
}

function dMove(){
    movement(faceD);
    sideMovement("D", faceF, faceR, faceB, faceL);
}

function invertedFMove(){
    invertedMovement(faceF);
    invertedSideMovement("F", faceU, faceR, faceD, faceL);
}

function invertedUMove(){
    invertedMovement(faceU);
    invertedSideMovement("U", faceB, faceR, faceF, faceL);
}

function invertedLMove(){
    invertedMovement(faceL);
    invertedSideMovement("L", faceU, faceF, faceD, faceB);
}

function invertedFMove(){
    invertedMovement(faceF);
    invertedSideMovement("F", faceU, faceR, faceD, faceL);
}

function invertedRMove(){
    invertedMovement(faceR);
    invertedSideMovement("R", faceU, faceB, faceD, faceF);
}

function invertedBMove(){
    invertedMovement(faceB);
    invertedSideMovement("B", faceU, faceL, faceD, faceR);
}

function invertedDMove(){
    invertedMovement(faceD);
    invertedSideMovement("D", faceF, faceR, faceB, faceL);
}

function movement(face){
    let save = face[1];
    face[1] = face[3]; 
    face[3] = face[7]; 
    face[7] = face[5]; 
    face[5] = save; 

    save = face[0];
    face[0] = face[6]; 
    face[6] = face[8]; 
    face[8] = face[2]; 
    face[2] = save; 
}

function sideMovement(movement, face1, face2, face3, face4){
    let save = face1;
    if (movement === "F") {
        face1[6] = face4[8];
        face1[7] = face4[5];
        face1[8] = face4[2];
    
        face4[2] = face3[0];
        face4[5] = face3[1];
        face4[8] = face3[2];
    
        face3[0] = face2[6];
        face3[1] = face2[3];
        face3[2] = face2[0];
    
        face2[0] = save[6];
        face2[3] = save[7];
        face2[6] = save[8];
    } else if (movement === "R") {
        face1[8] = face4[8];
        face1[5] = face4[5];
        face1[2] = face4[2];
    
        face4[2] = face3[2];
        face4[5] = face3[5];
        face4[8] = face3[8];
    
        face3[2] = face2[6];
        face3[5] = face2[3];
        face3[8] = face2[0];
    
        face2[0] = save[8];
        face2[3] = save[5];
        face2[6] = save[2];
    } else if (movement === "B") {
        face1[2] = face4[8];
        face1[1] = face4[5];
        face1[0] = face4[2];
    
        face4[2] = face3[8];
        face4[5] = face3[7];
        face4[8] = face3[6];
    
        face3[8] = face2[6];
        face3[7] = face2[3];
        face3[6] = face2[0];
    
        face2[0] = save[2];
        face2[3] = save[1];
        face2[6] = save[0];
    } else if (movement === "L") {
        face1[0] = face4[8];
        face1[3] = face4[5];
        face1[6] = face4[2];
    
        face4[2] = face3[6];
        face4[5] = face3[3];
        face4[8] = face3[0];
    
        face3[6] = face2[6];
        face3[3] = face2[3];
        face3[0] = face2[0];
    
        face2[0] = save[0];
        face2[3] = save[3];
        face2[6] = save[6];
    } else if (movement === "U") {
        face1[0] = face4[0];
        face1[1] = face4[1];
        face1[2] = face4[2];
    
        face4[0] = face3[0];
        face4[1] = face3[1];
        face4[2] = face3[2];
    
        face3[0] = face2[0];
        face3[1] = face2[1];
        face3[2] = face2[2];
    
        face2[0] = save[0];
        face2[1] = save[1];
        face2[2] = save[2];
    } else if (movement === "D") {
        face1[6] = face4[6];
        face1[7] = face4[7];
        face1[8] = face4[8];
    
        face4[6] = face3[6];
        face4[7] = face3[7];
        face4[8] = face3[8];
    
        face3[6] = face2[6];
        face3[7] = face2[7];
        face3[8] = face2[8];
    
        face2[6] = save[6];
        face2[7] = save[7];
        face2[8] = save[8];
    }
}

function invertedMovement(face){
    let save = face[1];
    face[1] = face[5]; 
    face[5] = face[7]; 
    face[7] = face[3]; 
    face[3] = save; 

    save = face[0];
    face[0] = face[2]; 
    face[2] = face[8]; 
    face[8] = face[6]; 
    face[6] = save; 
}


function invertedSideMovement(movement, face1, face2, face3, face4){
    let save = face1;
    if (movement === "F") {
        face1[6] = face2[0];
        face1[7] = face2[3];
        face1[8] = face2[6];
    
        face2[0] = face3[2];
        face2[3] = face3[1];
        face2[6] = face3[0];
    
        face3[0] = face4[2];
        face3[1] = face4[5];
        face3[2] = face4[8];
    
        face4[2] = save[8];
        face4[5] = save[7];
        face4[8] = save[6];
    } else if (movement === "R") {
        face1[8] = face2[0];
        face1[5] = face2[3];
        face1[2] = face2[6];
    
        face2[0] = face3[8];
        face2[3] = face3[5];
        face2[6] = face3[2];
    
        face3[2] = face4[2];
        face3[5] = face4[5];
        face3[8] = face4[8];
    
        face4[2] = save[2];
        face4[5] = save[5];
        face4[8] = save[8];
        
    } else if (movement === "B") {
        face1[2] = face2[0];
        face1[1] = face2[3];
        face1[0] = face2[6];
    
        face2[0] = face3[6];
        face2[3] = face3[7];
        face2[6] = face3[8];
    
        face3[8] = face4[2];
        face3[7] = face4[5];
        face3[6] = face4[6];

        face4[2] = save[0];
        face4[5] = save[1];
        face4[8] = save[2];
    } else if (movement === "L") {
        face1[0] = face2[0];
        face1[3] = face2[3];
        face1[6] = face2[6];
    
        face2[0] = face3[0];
        face2[3] = face3[3];
        face2[6] = face3[6];
    
        face3[6] = face4[2];
        face3[3] = face4[5];
        face3[0] = face4[8];
    
        face4[2] = save[6];
        face4[5] = save[3];
        face4[8] = save[0];
    } else if (movement === "U") {
        face1[0] = face2[0];
        face1[1] = face2[1];
        face1[2] = face2[2];
    
        face2[0] = face3[0];
        face2[1] = face3[1];
        face2[2] = face3[2];
    
        face3[0] = face4[0];
        face3[1] = face4[1];
        face3[2] = face4[2];
    
        face4[0] = save[0];
        face4[1] = save[1];
        face4[2] = save[2];
    } else if (movement === "D") {
        face1[6] = face2[6];
        face1[7] = face2[7];
        face1[8] = face2[8];
    
        face2[6] = face3[6];
        face2[7] = face3[7];
        face2[8] = face3[8];
    
        face3[6] = face4[6];
        face3[7] = face4[7];
        face3[8] = face4[8];
    
        face4[6] = save[6];
        face4[7] = save[7];
        face4[8] = save[8];
    }
}