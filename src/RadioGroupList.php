<?php

namespace Idez\RadioGroupList;

use Laravel\Nova\Fields\Field;

class RadioGroupList extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'radio-group-list';

    public function options(array $options){

        $this->withMeta([
            'options' => $options
        ]);

        return $this;
    }

}
