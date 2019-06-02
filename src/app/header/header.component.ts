import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { dataToken } from '../token.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @ViewChild('actionsContainer', { read: ViewContainerRef, static: true }) actionsContainer: ViewContainerRef;

  @Input() actionOptions: { component: unknown, data: unknown };

  constructor(private compiler: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.actionOptions && changes.actionOptions.currentValue) {
      this.actionsContainer.clear();

      const providers = [{
        provide: dataToken,
        useValue: changes.actionOptions.currentValue.data
      }];

      const injector = Injector.create({
        providers: providers,
        parent: this.actionsContainer.injector
      });

      let componentFactory = this.compiler.resolveComponentFactory(changes.actionOptions.currentValue.component);
      const component = componentFactory.create(injector);
      this.actionsContainer.insert(component.hostView);
    }
  }

}
