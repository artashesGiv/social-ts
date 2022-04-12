import React, {ChangeEvent} from 'react'

type ProfileStatusPropsType = {
   status: string
   updateStatus: (status: string) => void
}

type LocalStateType = {
   status: string
   editMode: boolean
}

export class EditableSpanClass extends React.Component<ProfileStatusPropsType> {

   state: LocalStateType = {
      status: this.props.status,
      editMode: false,
   }

   activateEditMode = () => {
      // асинхронный метод
      this.setState({
         editMode: true,
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false,
      })
      this.props.updateStatus(this.state.status)
   }

   onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({
         status: e.currentTarget.value,
      })
   }

   componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: LocalStateType) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status,
         })
      }
   }

   render() {
      return (
         <div>
            {!this.state.editMode &&
              <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Установить статус'}</span>
              </div>
            }
            {this.state.editMode &&
              <div>
                <input value={this.state.status} onBlur={this.deactivateEditMode} autoFocus={true}
                       onChange={this.onStatusChange}/>
              </div>
            }
         </div>
      )
   }
}
