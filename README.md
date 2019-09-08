# md-editor-bundle
Simple markdown editor for Symfony

## Install
```shell script
composer require sau/md-editor-bundle
bin/console assets:install --symlink --relative
```
If Symfony 4, add in `config/bundles.php`:
```php
Sau\Bundle\MDEditor\MDEditorBundle::class  => ['all' => true],
```
Add form in twig:
```yaml
twig:
    form_themes:
        - '@MDEditor/type/md-editor.html.twig'
```
and adding scripts/styles to your template
```twig
{{asset('bundles/mdeditor/md-editor.js')}}
{{asset('bundles/mdeditor/runtime.js')}}
{{asset('bundles/mdeditor/md-editor.css')}}
```
if using [sonata-admin-bundle](https://github.com/sonata-project/SonataAdminBundle) add configs to  
```yaml
sonata_admin:
    assets:
        extra_javascripts:
            - bundles/mdeditor/md-editor.js
            - bundles/mdeditor/runtime.js
        extra_stylesheets:
            - bundles/mdeditor/md-editor.css
```

