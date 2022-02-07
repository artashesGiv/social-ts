import React, {ChangeEvent} from 'react'

type ProfileStatusPropsType = {
   status: string
   updateStatus: (status: string) => void
}

type LocalStateType = {
   status: string
   editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

   state: LocalStateType = {
      status: this.props.status,
      editMode: false,
   }

   activateEditMode = () => {
      // ассинхронный метод
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

// export const ProfileStatus = (props: ProfileStatusPropsType) => {
//
//    const [state, setState] = useState<LocalStateType>({
//       status: props.status,
//       editMode: false,
//    })
//
//    const activateEditMode = () => {
//       setState({
//          ...state,
//          editMode: true,
//       })
//    }
//
//    const deactivateEditMode = () => {
//       setState({
//          ...state,
//          editMode: false,
//       })
//       props.updateStatus(state.status)
//    }
//
//    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
//       setState({
//          ...state,
//          status: e.currentTarget.value,
//       })
//    }
//
//    useEffect(() => {
//       setState({
//          ...state,
//          status: props.status,
//       })
//    }, [props.status])
//
//    return (
//       <div>
//          {!state.editMode &&
//            <div>
//              <span onDoubleClick={activateEditMode}>{props.status || 'Установить статус'}</span>
//            </div>
//          }
//          {state.editMode &&
//            <div>
//              <input value={state.status} onBlur={deactivateEditMode} autoFocus={true}
//                     onChange={onStatusChange}/>
//            </div>
//          }
//       </div>
//    )
// }