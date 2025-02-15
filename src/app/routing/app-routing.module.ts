import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', 
        loadChildren: () =>  import('../pages/home-page/home-page.module').then(m => m.HomeModule)
    },
    { path: 'fav', 
        loadChildren: () =>  import('../pages/fav-page/fav-page.module').then(m => m.FavModule)
    },
    { path: 'overview/:movieName/:movieId', 
        loadChildren: () =>  import('../pages/overview-page/overview-page.module').then(m => m.OverviewModule)
    },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
