import {Component, forwardRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


export const EPANDED_TEXTAREA_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaExpandedComponent),
  multi: true,
};

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea-expanded.component.html',
  styleUrls: ['./textarea-expanded.component.css'],
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR],
})
export class TextareaExpandedComponent implements ControlValueAccessor {
  @ViewChild('textarea') textarea;

  onChange;
  onTouched;

  writeValue( value : any ) : void {
    const div = this.textarea.nativeElement;
    this.renderer.setProperty(div, 'textContent', value);
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }

  constructor( private renderer : Renderer2 ) {
  }

  change( $event ) {
    this.onChange($event.target.textContent);
    this.onTouched($event.target.textContent);
  }

}

