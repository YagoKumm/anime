import { NgModule } from "@angular/core"; 
import { RouterModule, Routes } from "@angular/router";
import { NaoEncontradaComponent } from "./nao-encontrada/nao-encontrada.component";

const routes: Routes = [
    {path: '', redirectTo: '/animes', pathMatch: 'full'},
    { path: 'animes', loadChildren: () => import('./animes/animes.module').then(m => m.AnimesModule) },
    { path: '**', component:NaoEncontradaComponent }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}