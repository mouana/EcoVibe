<?php

namespace App\Providers;

<<<<<<< HEAD
use Illuminate\Support\Facades\Route;
=======
>>>>>>> 95f62df1a949582096d83a440d6811d047573724
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
<<<<<<< HEAD
        Route::middlewareGroup('admin', [
            \App\Http\Middleware\IsAdmin::class,
        ]);
    }
}
=======
        //
    }
}
>>>>>>> 95f62df1a949582096d83a440d6811d047573724
