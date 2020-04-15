import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument ,AngularFirestoreCollection , DocumentReference} from '@angular/fire/firestore';
import { Commenication } from 'src/app/shared/commenication';
import { Evaluation } from 'src/app/register-teacher/evaluation';
@Injectable({
  providedIn: 'root'
})
export class CommenicationService {
  private dbPath = '/Commenication';
  private dbPathE = '/Evaluation';
  messagesRef : AngularFirestoreCollection<Commenication> = null;
  EvalutionsRef : AngularFirestoreCollection<Evaluation> = null;
  constructor(private db: AngularFirestore ) {
    this.messagesRef= this.db.collection(this.dbPath);
    this.EvalutionsRef= this.db.collection(this.dbPathE);
  }

  createMessage(Key : any ,message : Commenication):void{
    this.messagesRef.doc(Key).set({...message}).catch((error)=>{
      window.alert(error.message);
    });
  }

  createEvaloutin(Key : any , evaluation : Evaluation){
    this.EvalutionsRef.doc(Key).set({...evaluation}).catch((error)=>{
      window.alert(error.message);
    });
  }

  getEvalution():AngularFirestoreCollection<Evaluation>{
    return this.EvalutionsRef;
  }

  deleteMessage(ID: string): Promise<void> {
    return this.messagesRef.doc(ID).delete();
  }

  getMessage(): AngularFirestoreCollection<Commenication>{
    return this.messagesRef;
  }

}
