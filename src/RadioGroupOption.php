<?php

namespace Idez\RadioGroupList;


use Laravel\Nova\Makeable;

/**
 * @method static static make(string|int $value, string $name, string $description = '')
 */
class RadioGroupOption
{
    use Makeable;

    public function __construct(public string $value, public string $name, public string $description = '')
    {
    }
}
