const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .sass('resources/views/admin/scss/bootstrap-4.scss', 'public/admin/css/bootstrap.css'            )
    .sass('resources/views/admin/scss/bootstrap-4-theme.scss','public/admin/css/bootstrap-4-theme.css')
.styles('node_modules/admin-lte/dist/css/adminlte.css', 'public/admin/css/adminlte.css')
    // .sass('node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss','public/admin/css/fontawesome.css')
    .styles(
        [
            "node_modules/select2/dist/css/select2.css",
            "node_modules/select2-bootstrap-theme/dist/select2-bootstrap.css"
        ],
        "public/admin/css/select2.css"
    )

    .styles(
        "node_modules/@sweetalert2/theme-bootstrap-4/bootstrap-4.css",
        "public/admin/css/theme-bootstrap4-sweetalert2.css"
    )
    .styles(
        "node_modules/chart.js/dist/Chart.css",
        "public/admin/css/chart.css"
    )

    //.sass('resources/views/admin/css/datatables.css','public/admin/css/dataTables.bootstrap4.css')
    .styles(
        [
            "node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css",
            "node_modules/datatables.net-editor-bs4/css/editor.bootstrap4.css",
            "node_modules/datatables.net-autoFill-bs4/css/autoFill.bootstrap4.css",
            "node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.css",
            "node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.css",
            "node_modules/datatables.net-scroller-bs4/css/scroller.bootstrap4.css",
            "node_modules/datatables.net-select-bs4/css/select.bootstrap4.css"
        ],
        "public/admin/css/dataTables.bootstrap4.css"
    )

    .styles(
        "node_modules/toastr/build/toastr.css",
        "public/admin/css/toastr.css"
    )

    .js("node_modules/jquery/dist/jquery.js", "public/admin/js/jquery.js")

    .js("resources/views/admin/js/bootstrap.js", "public/admin/js/bootstrap.js")
    .js(
        "resources/views/admin/js/sweetalert2.js",
        "public/admin/js/sweetalert2.js"
    )
    .js("resources/views/admin/js/toastr.js", "public/admin/js/toastr.js")
    .js(
        "node_modules/sweetalert2/dist/sweetalert2.js",
        "public/admin/js/sweetalert2.js"
    )
    .js("node_modules/chart.js/dist/Chart.js", "public/admin/js/chart.js")
    .js(
        "node_modules/admin-lte/dist/js/adminlte.js",
        "public/admin/js/adminlte.js"
    )
    .js("node_modules/admin-lte/dist/js/demo.js", "public/admin/js/demo.js")

    /* DataTable */
    .js(
        "resources/views/admin/js/datatables.js",
        "public/admin/js/dataTables.bootstrap4.js"
    )

    /* Scripts do site */
    .version();
