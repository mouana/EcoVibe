<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('experts', function (Blueprint $table) {
        $table->renameColumn('NometPrenom', 'nom_prenom');
    });
}

public function down()
{
    Schema::table('experts', function (Blueprint $table) {
        $table->renameColumn('nom_prenom', 'NometPrenom');
    });
}

};