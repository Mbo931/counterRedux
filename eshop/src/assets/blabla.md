<label htmlFor="">Your email: </label>
<input type="mail" name="mail" id="mail" />

{inputFields.map((field) => (

<div key={field.name}>
<label htmlFor={field.name}>{field.label}</label>
<input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChanges}
            />
</div>
))}

{selectedOption.map((value) => (

<option value={value} key={value}>
{value}
</option>
))}

<label htmlFor="">Your firstname</label>
<input type="text" name="firstname" id="firstname" />

        <label htmlFor="">Your lastname: </label>
        <input type="text" name="lastname" id="lastname" />
