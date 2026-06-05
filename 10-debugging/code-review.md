## Cat Facts Button

I noticed that the Load new facts does not work when you click, it just makes all of the facts go away.

The problem with this code is that when the user clicks the button "Load New Cat Facts", the container loses its class because you put the whole code as display-none.

This will allow the cat facts to properly show after you click the button.

Replace:
```Js
loading.setAttribute('class', 'display-none');
```

With:
```Js
loading.classList.add('display-none');
```


## Form Submit button

I noticed that the reset button and the submit button does not do anything at all.

After looking at the end of the form you can see that it is not even part of the form.

It's a very easy fix with you just need to put the whole div inside of the form area for the submit and reset buttons to work.



Replace:
```HTML
    <form>
    ...
    </form>
      <div
        class="form space-evenly-distributed-row-container form-buttons-container"
      >
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
      </div>
```

With:
```HTML
    <form>
        ...
      <div
        class="form space-evenly-distributed-row-container form-buttons-container"
      >
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
      </div>
    </form>
```

