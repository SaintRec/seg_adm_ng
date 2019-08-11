import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/service/auth.service";
import { RestService } from "app/service/rest.service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.scss"]
})
export class PerfilComponent implements OnInit {
  user: any = {
    nombres: " ",
    apellidos: " ",
    cod_cc: " ",
    cod_id: " ",
    cod_pidm: " ",
    email: " ",
    perfil: ""
  };
  perfil: any[] = [{}];

  constructor(
    private apiUserToken: AuthService,
    private apiService: RestService
  ) {}

  ngOnInit() {
    this.dataUser();
  }

  dataUser() {
    this.user = this.apiUserToken.getUserToken();
    this.apiService.findDataUser(this.user.sub).subscribe(
      data => {
        this.user = data.usuario;
        this.perfil = data.perfil;
      },
      error => {
        console.log(error);
      }
    );
  }
}
