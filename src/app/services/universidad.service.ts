import { Injectable } from '@angular/core';
import { Universidad } from '../domain/universidad';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {


  private dbPath = '/universidad';
  universidad1 : Universidad [] = []

  



  universidadRef: AngularFirestoreCollection<Universidad>;

  constructor(private db: AngularFirestore) { 

    this.universidadRef = db.collection(this.dbPath);
  }



  
  save(universidad: Universidad) {
    this.universidad1.push(universidad)
    //contacto.uid = this.db.createId()
    console.log(this.universidad1)
    this.create(universidad)
  }


  getList(){
    return this.universidad1
  }



  getAll() {
    return this.universidadRef.valueChanges();
  }
  create(universidad: Universidad): any {
    //return this.contactosRef.doc(contacto.uid).set({ ...contacto });
  }

  editar(universidad: Universidad): any {
   // return this.contactosRef.doc(contacto.uid).update(contacto);
   this.universidad1.push(universidad)
   console.log(this.universidad1)
    this.create(universidad)
  }

  //delete(id: string): //Promise<void> {
   // return this.contactosRef.doc(id).delete();
  //}
}










